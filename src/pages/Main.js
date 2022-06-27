import React, { useEffect } from "react";
import { Card } from "../components";
import { animateScroll } from "react-scroll";
import ReactPaginate from "react-paginate";
const Main = ({ data, setCurrentPage, setData }) => {
	// console.log(dataArray);
	//check if the data has arrived or not
    // changin data tyle from obj to array
	// const dataArray = [Object.values(data)];
	// array from object values 

	const increaseCurrentPage = () => {
		setData(null);

		setCurrentPage((pre) => pre + 1);
	};
	const decreaseCurrentPage = () => {
		setCurrentPage((pre) => {
			setData(null);
			let currentpage = pre - 1;
			return currentpage > 1 ? currentpage : 1;
		});
	};

	useEffect(() => {
		animateScroll.scrollToTop({
			duration: 2000,
			delay: 500,
			smooth: true,
		});
	}, []);

// front end pagination bad, 
//back eng pagination//
	return !data ? (
		<p className='bg-gray-200 text-3xl flex justify-center items-center m-2 w-[100vw] h-[100vh]'>
			Loading ...
		</p>
	) : (
		<div className="text-right">
			{data.map((person) => {
				{/* key value je vidljiva u Components u browesru, gde je Card komponent "obuhvatio podatke" 
			person.owner.avatar_url
			array[n].owner.avar_url
			*/}
				return <Card key={person.id} person={person} />;
			})}
						<button onClick={decreaseCurrentPage} className="w-20 h-10 m-2 bg-gray-400 rounded text-white">Previus</button>

						<button onClick={increaseCurrentPage} className="w-20 h-10 m-2 bg-orange-400 rounded text-white">Next</button>
		</div>
	);
};
export default Main;
/*
{
    "url": "https://api.github.com/gists/2d6c0c68fd646f349a3bb2e29cca4f1c",
    "forks_url": "https://api.github.com/gists/2d6c0c68fd646f349a3bb2e29cca4f1c/forks",
    "commits_url": "https://api.github.com/gists/2d6c0c68fd646f349a3bb2e29cca4f1c/commits",
    "id": "2d6c0c68fd646f349a3bb2e29cca4f1c",
    "node_id": "G_kwDOAF-wA9oAIDJkNmMwYzY4ZmQ2NDZmMzQ5YTNiYjJlMjljY2E0ZjFj",
    "git_pull_url": "https://gist.github.com/2d6c0c68fd646f349a3bb2e29cca4f1c.git",
    "git_push_url": "https://gist.github.com/2d6c0c68fd646f349a3bb2e29cca4f1c.git",
    "html_url": "https://gist.github.com/2d6c0c68fd646f349a3bb2e29cca4f1c",
    "files": {
        "FilesSnapshot.xml": {
            "filename": "FilesSnapshot.xml",
            "type": "application/xml",
            "language": "XML",
            "raw_url": "https://gist.githubusercontent.com/choco-bot/2d6c0c68fd646f349a3bb2e29cca4f1c/raw/afea1e2c2a9c46575a84146efeaaa0479d627656/FilesSnapshot.xml",
            "size": 1371
        },
        "Install.txt": {
            "filename": "Install.txt",
            "type": "text/plain",
            "language": "Text",
            "raw_url": "https://gist.githubusercontent.com/choco-bot/2d6c0c68fd646f349a3bb2e29cca4f1c/raw/d4620c3e4bd1cbc43791df2d8004c0951a2d85ae/Install.txt",
            "size": 131076
        },
        "Uninstall.txt": {
            "filename": "Uninstall.txt",
            "type": "text/plain",
            "language": "Text",
            "raw_url": "https://gist.githubusercontent.com/choco-bot/2d6c0c68fd646f349a3bb2e29cca4f1c/raw/8dd5b6c10877f87fd5978fd715b539a6d855108e/Uninstall.txt",
            "size": 38470
        },
        "_Summary.md": {
            "filename": "_Summary.md",
            "type": "text/markdown",
            "language": "Markdown",
            "raw_url": "https://gist.githubusercontent.com/choco-bot/2d6c0c68fd646f349a3bb2e29cca4f1c/raw/907a004e494d48e412586d8dd13476b5bbaaaf7f/_Summary.md",
            "size": 491
        }
    },
    "public": true,
    "created_at": "2022-06-24T18:42:27Z",
    "updated_at": "2022-06-24T18:42:28Z",
    "description": "pcsx2-dev v1.7.2996-dev - Passed - Package Tests Results",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/2d6c0c68fd646f349a3bb2e29cca4f1c/comments",
    "owner": {
        "login": "choco-bot",
        "id": 6270979,
        "node_id": "MDQ6VXNlcjYyNzA5Nzk=",
        "avatar_url": "https://avatars.githubusercontent.com/u/6270979?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/choco-bot",
        "html_url": "https://github.com/choco-bot",
        "followers_url": "https://api.github.com/users/choco-bot/followers",
        "following_url": "https://api.github.com/users/choco-bot/following{/other_user}",
        "gists_url": "https://api.github.com/users/choco-bot/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/choco-bot/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/choco-bot/subscriptions",
        "organizations_url": "https://api.github.com/users/choco-bot/orgs",
        "repos_url": "https://api.github.com/users/choco-bot/repos",
        "events_url": "https://api.github.com/users/choco-bot/events{/privacy}",
        "received_events_url": "https://api.github.com/users/choco-bot/received_events",
        "type": "User",
        "site_admin": false
    },
    "truncated": false
}
*/
