import * as actions from "../store/action";
import * as types from "../store/actionType";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let popularTVMockReturnResult = {
	page: 1,
	total_results: 20000,
	total_pages: 1000,
	results: [
		{
			original_name: "Marvel's Iron Fist",
			genre_ids: [80, 18, 10759, 10765],
			name: "Marvel's Iron Fist",
			popularity: 467.649,
			origin_country: ["US"],
			vote_count: 758,
			first_air_date: "2017-03-17",
			backdrop_path: "/xHCfWGlxwbtMeeOnTvxUCZRGnkk.jpg",
			original_language: "en",
			id: 62127,
			vote_average: 6.1,
			overview:
				"Danny Rand resurfaces 15 years after being presumed dead. Now, with the power of the Iron Fist, he seeks to reclaim his past and fulfill his destiny.",
			poster_path: "/nv4nLXbDhcISPP8C1mgaxKU50KO.jpg"
		},
		{
			original_name: "Arrow",
			genre_ids: [80, 18, 9648, 10759],
			name: "Arrow",
			popularity: 325.035,
			origin_country: ["US"],
			vote_count: 2174,
			first_air_date: "2012-10-10",
			backdrop_path: "/dKxkwAJfGuznW8Hu0mhaDJtna0n.jpg",
			original_language: "en",
			id: 1412,
			vote_average: 5.9,
			overview:
				"Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
			poster_path: "/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg"
		},
		{
			original_name: "The Flash",
			genre_ids: [18, 10765],
			name: "The Flash",
			popularity: 239.785,
			origin_country: ["US"],
			vote_count: 2460,
			first_air_date: "2014-10-07",
			backdrop_path: "/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg",
			original_language: "en",
			id: 60735,
			vote_average: 6.7,
			overview:
				'After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won\'t be long before the world learns what Barry Allen has become...The Flash.',
			poster_path: "/fki3kBlwJzFp8QohL43g9ReV455.jpg"
		},
		{
			original_name: "ドラゴンボール",
			genre_ids: [16, 35, 10759, 10765],
			name: "Dragon Ball",
			popularity: 219.299,
			origin_country: ["JP"],
			vote_count: 225,
			first_air_date: "1986-02-26",
			backdrop_path: "/iflq7ZJfso6WC7gk9l1tD3unWK.jpg",
			original_language: "ja",
			id: 12609,
			vote_average: 7.7,
			overview:
				"Long ago in the mountains, a fighting master known as Gohan discovered a strange boy whom he named Goku. Gohan raised him and trained Goku in martial arts until he died. The young and very strong boy was on his own, but easily managed. Then one day, Goku met a teenage girl named Bulma, whose search for the dragon balls brought her to Goku's home. Together, they set off to find all seven dragon balls in an adventure that would change Goku's life forever. See how Goku met his life long friends Bulma, Yamcha, Krillin, Master Roshi and more. And see his adventures as a boy, all leading up to  Dragonball Z and later  Dragonball GT.",
			poster_path: "/3wx3EAMtqnbSLhGG8NrqXriCUIQ.jpg"
		},
		{
			original_name: "Riverdale",
			genre_ids: [18, 9648],
			name: "Riverdale",
			popularity: 214.717,
			origin_country: ["US"],
			vote_count: 407,
			first_air_date: "2017-01-26",
			backdrop_path: "/2IUpoKSP64r6rp2vBo0Fdk8a1UU.jpg",
			original_language: "en",
			id: 69050,
			vote_average: 7.2,
			overview:
				"Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
			poster_path: "/gskv297rlbyzLaTU1XZf8UBbxp0.jpg"
		},
		{
			original_name: "フェアリーテイル",
			genre_ids: [16, 35, 10759, 10765],
			name: "Fairy Tail",
			popularity: 197.16,
			origin_country: ["JP"],
			vote_count: 105,
			first_air_date: "2009-10-12",
			backdrop_path: "/m2lugAG39sO0yCcuxEAu4fY5u1o.jpg",
			original_language: "ja",
			id: 46261,
			vote_average: 7,
			overview:
				"Lucy is a 17-year-old girl, who wants to be a full-fledged mage. One day when visiting Harujion Town, she meets Natsu, a young man who gets sick easily by any type of transportation. But Natsu isn't just any ordinary kid, he's a member of one of the world's most infamous mage guilds: Fairy Tail.",
			poster_path: "/58GKcwFV3lpVOGzybeMrrNOjHpz.jpg"
		},
		{
			original_name: "Gotham",
			genre_ids: [80, 18, 14],
			name: "Gotham",
			popularity: 190.372,
			origin_country: ["US"],
			vote_count: 980,
			first_air_date: "2014-09-22",
			backdrop_path: "/mKBP1OCgCG0jw8DwVYlnYqVILtc.jpg",
			original_language: "en",
			id: 60708,
			vote_average: 6.9,
			overview:
				"Before there was Batman, there was GOTHAM. \n\nEveryone knows the name Commissioner Gordon. He is one of the crime world's greatest foes, a man whose reputation is synonymous with law and order. But what is known of Gordon's story and his rise from rookie detective to Police Commissioner? What did it take to navigate the multiple layers of corruption that secretly ruled Gotham City, the spawning ground of the world's most iconic villains? And what circumstances created them – the larger-than-life personas who would become Catwoman, The Penguin, The Riddler, Two-Face and The Joker? ",
			poster_path: "/4XddcRDtnNjYmLRMYpbrhFxsbuq.jpg"
		},
		{
			original_name: "Supernatural",
			genre_ids: [18, 9648, 10765],
			name: "Supernatural",
			popularity: 178.755,
			origin_country: ["US"],
			vote_count: 1682,
			first_air_date: "2005-09-13",
			backdrop_path: "/o9OKe3M06QMLOzTl3l6GStYtnE9.jpg",
			original_language: "en",
			id: 1622,
			vote_average: 7.2,
			overview:
				"When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
			poster_path: "/3iFm6Kz7iYoFaEcj4fLyZHAmTQA.jpg"
		},
		{
			original_name: "ナルト 疾風伝",
			genre_ids: [16, 35, 18],
			name: "Naruto Shippūden",
			popularity: 178.123,
			origin_country: ["JP"],
			vote_count: 179,
			first_air_date: "2007-02-15",
			backdrop_path: "/c14vjmndzL9tBdooGsMznMFrFLo.jpg",
			original_language: "ja",
			id: 31910,
			vote_average: 7.5,
			overview:
				"Naruto Shippuuden is the continuation of the original animated TV series Naruto.The story revolves around an older and slightly more matured Uzumaki Naruto and his quest to save his friend Uchiha Sasuke from the grips of the snake-like Shinobi, Orochimaru. After 2 and a half years Naruto finally returns to his village of Konoha, and sets about putting his ambitions to work, though it will not be easy, as He has amassed a few (more dangerous) enemies, in the likes of the shinobi organization; Akatsuki.",
			poster_path: "/ic9Gb4Zz09ns3JPYHdax8u5kt0n.jpg"
		},
		{
			original_name: "Vikings",
			genre_ids: [18, 10759],
			name: "Vikings",
			popularity: 170.866,
			origin_country: ["CA"],
			vote_count: 1522,
			first_air_date: "2013-03-03",
			backdrop_path: "/A30ZqEoDbchvE7mCZcSp6TEwB1Q.jpg",
			original_language: "en",
			id: 44217,
			vote_average: 7.4,
			overview:
				"Vikings follows the adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods. Legend has it that he was a direct descendant of Odin, the god of war and warriors.",
			poster_path: "/94gP9uXNdbypwCLORjeurlad15Z.jpg"
		},
		{
			original_name: "Game of Thrones",
			genre_ids: [18, 10759, 10765],
			name: "Game of Thrones",
			popularity: 167.343,
			origin_country: ["US"],
			vote_count: 5193,
			first_air_date: "2011-04-17",
			backdrop_path: "/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg",
			original_language: "en",
			id: 1399,
			vote_average: 8.2,
			overview:
				"Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
			poster_path: "/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg"
		},
		{
			original_name: "The Simpsons",
			genre_ids: [16, 35],
			name: "The Simpsons",
			popularity: 148.168,
			origin_country: ["US"],
			vote_count: 1832,
			first_air_date: "1989-12-17",
			backdrop_path: "/lnnrirKFGwFW18GiH3AmuYy40cz.jpg",
			original_language: "en",
			id: 456,
			vote_average: 7.1,
			overview:
				"Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
			poster_path: "/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
		},
		{
			original_name: "Family Guy",
			genre_ids: [16, 35],
			name: "Family Guy",
			popularity: 145.173,
			origin_country: ["US"],
			vote_count: 1369,
			first_air_date: "1999-01-31",
			backdrop_path: "/pH38r4TWTqq7Mcs6XAlwgzNUeJe.jpg",
			original_language: "en",
			id: 1434,
			vote_average: 6.5,
			overview:
				"Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
			poster_path: "/gBGUL1UTUNmdRQT8gA1LUV4yg39.jpg"
		},
		{
			original_name: "ブラッククローバー",
			genre_ids: [16, 35, 10759],
			name: "Black Clover",
			popularity: 139.283,
			origin_country: ["JP"],
			vote_count: 38,
			first_air_date: "2017-10-03",
			backdrop_path: "/jHH4jmWWmYWpoxpGwMYM5RqJnvo.jpg",
			original_language: "ja",
			id: 73223,
			vote_average: 5.8,
			overview:
				'Asta and Yuno were abandoned together at the same church, and have been inseparable since. As children, they promised that they would compete against each other to see who would become the next Emperor Magus. However, as they grew up, some differences between them became plain. Yuno was a genius with magic, with amazing power and control, while Asta could not use magic at all, and tried to make up for his lack by training physically. When they received their Grimoires at age 15, Yuno got a spectacular book with a four-leaf clover (most people receive a three-leaf-clover), while Asta received nothing at all. However, when Yuno was threatened, the truth about Asta\'s power was revealed, he received a five-leaf clover Grimoire, a "black clover"! Now the two friends are heading out in the world, both seeking the same goal!',
			poster_path: "/kaMisKeOoTBPxPkbC3OW7Wgt6ON.jpg"
		},
		{
			original_name: "The Big Bang Theory",
			genre_ids: [35],
			name: "The Big Bang Theory",
			popularity: 138.957,
			origin_country: ["US"],
			vote_count: 3523,
			first_air_date: "2007-09-24",
			backdrop_path: "/nGsNruW3W27V6r4gkyc3iiEGsKR.jpg",
			original_language: "en",
			id: 1418,
			vote_average: 6.8,
			overview:
				"The Big Bang Theory is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali. The geekiness and intellect of the four guys is contrasted for comic effect with Penny's social skills and common sense.",
			poster_path: "/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg"
		},
		{
			original_name: "Grey's Anatomy",
			genre_ids: [18],
			name: "Grey's Anatomy",
			popularity: 137.671,
			origin_country: ["US"],
			vote_count: 844,
			first_air_date: "2005-03-27",
			backdrop_path: "/y6JABtgWMVYPx84Rvy7tROU5aNH.jpg",
			original_language: "en",
			id: 1416,
			vote_average: 6.3,
			overview:
				"Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
			poster_path: "/mgOZSS2FFIGtfVeac1buBw3Cx5w.jpg"
		},
		{
			original_name: "僕のヒーローアカデミア",
			genre_ids: [16, 35, 10759],
			name: "My Hero Academia",
			popularity: 134.301,
			origin_country: ["JP"],
			vote_count: 120,
			first_air_date: "2016-04-03",
			backdrop_path: "/wokDQZwuY7VxKQ8vbANh4nJrKTi.jpg",
			original_language: "ja",
			id: 65930,
			vote_average: 7.7,
			overview:
				'People are not born equal, a realization that 4-year-old Midoriya Izuku faced when bullied by his classmates who had unique special powers. Izuku was one of the rare cases where he was born with absolutely no unique powers. This did not stop Izuku from pursuing his dream, a dream of becoming a great hero like the legendary All-Might. To become the great hero he hopelessly wants to become, he now will join the ranks of one of the highest rated "Hero Academies" in the country: UA. With the help of his idol All-Might, will he be able to claim the ranks and become a true hero?',
			poster_path: "/n7v0dbkNhfxLaaGyp6g24FpvAUi.jpg"
		},
		{
			original_name: "The 100",
			genre_ids: [18, 10765],
			name: "The 100",
			popularity: 127.993,
			origin_country: ["US"],
			vote_count: 1386,
			first_air_date: "2014-03-19",
			backdrop_path: "/qYTIuJJ7fIehicAt3bl0vW70Sq6.jpg",
			original_language: "en",
			id: 48866,
			vote_average: 6.5,
			overview:
				"Based on the books by Kass Morgan, this show takes place 100 years in the future, when the Earth has been abandoned due to radioactivity. The last surviving humans live on an ark orbiting the planet — but the ark won't last forever. So the repressive regime picks 100 expendable juvenile delinquents to send down to Earth to see if the planet is still habitable.",
			poster_path: "/wHIMMLFsk32wIzDmawWkYVbxFCS.jpg"
		},
		{
			original_name: "Future Man",
			genre_ids: [35, 10765],
			name: "Future Man",
			popularity: 126.336,
			origin_country: ["US"],
			vote_count: 71,
			first_air_date: "2017-11-14",
			backdrop_path: "/qQxb3uVa3mhZ1pFY2DlmtdKreXd.jpg",
			original_language: "en",
			id: 73157,
			vote_average: 7.1,
			overview:
				"Josh Futturman, a janitor by day/world-ranked gamer by night, is tasked with preventing the extinction of humanity after mysterious visitors from the future proclaim him the key to defeating the imminent super-race invasion.",
			poster_path: "/9P72cymABXbQKaOUBdZf6pOW64e.jpg"
		},
		{
			original_name: "ソードアート・オンライン",
			genre_ids: [16, 10759, 10765],
			name: "Sword Art Online",
			popularity: 125.182,
			origin_country: ["JP"],
			vote_count: 167,
			first_air_date: "2012-07-08",
			backdrop_path: "/1ENifuXpviC2kEZ1Ya08EyN9SYg.jpg",
			original_language: "ja",
			id: 45782,
			vote_average: 7.5,
			overview:
				"The players of a virtual reality MMORPG, Sword Art Online, are trapped and fighting for their very lives. After it is announced that the only way to leave the game is by beating it, Kirito—a very powerful swordsman—and his friends take on a quest to free all the minds trapped in Aincrad.",
			poster_path: "/1i7KsXiFlhqdyRzWfTg90WkLIMY.jpg"
		}
	]
};
describe("actions", () => {
	afterEach(() => {
		fetchMock.restore();
	});
	it("creates FETCH_TODOS_SUCCESS when fetching todos has been done", () => {
		fetchMock.getOnce("tv/popular", {
			body: { todos: ["do something"] },
			headers: { "content-type": "application/json" }
		});

		const expectedActions = [
			{ type: "REQUEST popular SEND" },
			{ type: "REQUEST popular SUCCESSED" },
			{ payload: popularTVMockReturnResult, type: "POPULARTV" }
		];
		const store = mockStore({
			category: {
				Movie: [
					{
						url: "now_playing",
						display: "Now Playing",
						id: 3,
						now_playing: []
					},
					{
						url: "top_rated",
						display: "Top Rated Movies",
						id: 4,
						top_rated: []
					},
					{
						url: "popular",
						display: "Popular Movies",
						id: 5,
						popular: []
					},
					{
						url: "upcoming",
						display: "Up Comming Movies",
						id: 6,
						upcoming: []
					}
				],
				TV: [
					{
						url: "top_rated",
						display: "Top Rated TV Shows",
						id: 7,
						top_rated: []
					},
					{
						url: "popular",
						display: "Popular TV Shows",
						id: 8,
						popular: []
					},
					{
						url: "on_the_air",
						display: "On The Air TV Shows",
						id: 9,
						on_the_air: []
					},
					{
						url: "airing_today",
						display: "Airing Today TV Shows",
						id: 10,
						airing_today: []
					}
				]
			}
		});

		return store
			.dispatch(actions.getMovieList("tv", "popular"))
			.then(() => {
				// return of async actions
				expect(store.getActions()).toEqual(expectedActions);
			});
	});
});
