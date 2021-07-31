const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];

//Map creates a new array by calling your callback function with each element in the original array.
const doubles = numbers.map(function (num) {
	return num * 2; //Need to return the value!
});
//[40, 42, 44, 46, 48, 50, 52, 54]

const numDetail = numbers.map(function (n) {
	return {
		value: n,
		isEven: n % 2 === 0,
	};
});

const abbrevs = words.map(function (word) {
	return word.toUpperCase().split("").join(".");
});
//["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]

const books = [
	{
		title: "Good Omens",
		authors: ["Terry Pratchett", "Neil Gaiman"],
		rating: 4.25,
	},
	{
		title: "Bone: The Complete Edition",
		authors: ["Jeff Smith"],
		rating: 4.42,
	},
	{
		title: "American Gods",
		authors: ["Neil Gaiman"],
		rating: 4.11,
	},
	{
		title: "A Gentleman in Moscow",
		authors: ["Amor Towles"],
		rating: 4.36,
	},
];

const movies = [
	"The Fantastic Mr.Fox",
	"Mr. and Mrs. Smith",
	"Mrs. DoubtFire",
	"Mr. Deeds",
];

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const nums = [34, 35, 67, 54, 109, 213, 32, 9];

const books = [
	{
		title: "Good Omens",
		authors: ["Terry Pratchett", "Neil Gaiman"],
		rating: 4.25,
		genres: ["fiction", "fantasy"],
	},
	{
		title: "Changing My Mind",
		authors: ["Zadie Smith"],
		rating: 3.83,
		genres: ["nonfiction", "essays"],
	},
	{
		title: "Bone: The Complete Edition",
		authors: ["Jeff Smith"],
		rating: 4.42,
		genres: ["fiction", "graphic novel", "fantasy"],
	},
	{
		title: "American Gods",
		authors: ["Neil Gaiman"],
		rating: 4.11,
		genres: ["fiction", "fantasy"],
	},
	{
		title: "A Gentleman in Moscow",
		authors: ["Amor Towles"],
		rating: 4.36,
		genres: ["fiction", "historical fiction"],
	},
	{
		title: "The Name of the Wind",
		authors: ["Patrick Rothfuss"],
		rating: 4.54,
		genres: ["fiction", "fantasy"],
	},
	{
		title: "The Overstory",
		authors: ["Richard Powers"],
		rating: 4.19,
		genres: ["fiction", "short stories"],
	},
	{
		title: "The Way of Kings",
		authors: ["Brandon Sanderson"],
		rating: 4.65,
		genres: ["fantasy", "epic"],
	},
	{
		title: "Lord of the flies",
		authors: ["William Golding"],
		rating: 3.67,
		genres: ["fiction"],
	},
];

const words = ["dog", "dig", "log", "bag", "wag"];

const raceResults = [
	"TestRace1",
	"TestRace2",
	"TestRace3",
	"TestRace4",
	"TestRace4",
	"TestRace5",
];

const runner = {
	first: "Eliud",
	last: "Kipchoge",
	country: "Kenya",
	title: "Elder of the Order of the Golden Heart of Kenya",
};

const results = [
	{
		first: "Eliud",
		last: "Kipchoge",
		country: "Kenya",
	},
	{
		first: "Feyisa",
		last: "Lilelsa",
		country: "Ethipeo",
	},
	{
		first: "Galen",
		last: "Rupp",
		country: "US",
	},
];

const response = ["HTTP/1.1", "200 OK", "application/json"];

const role = "host";
const person = "Jools Holland";
const role2 = "Director";
const person2 = "James Cameron";

const makeNewDeck = () => {
	return {
		deck: [],
		drawnCard: [],
		suits: ["hearts", "diamonds", "spades", "clubs"],
		values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
		initializeDeck() {
			const { suits, values, deck } = this;
			for (let value of values.split(",")) {
				for (let suit of suits) {
					deck.push({ value, suit });
				}
			}
		},
		drawCard() {
			const card = this.deck.pop();
			this.drawnCard.push(card);
			return card;
		},
		drawMultiple(numCards) {
			const cards = [];
			for (let i = 0; i < numCards; i++) {
				cards.push(this.drawCard());
			}
			return cards;
		},
		shuffle() {
			const { deck } = this;
			// loop over array backwards
			for (let i = deck.length - 1; i > 0; i--) {
				// pick random number before current I
				let j = Math.floor(Math.random() * (i + 1));
				//swap
				[deck[i], deck[j]] = [deck[j], deck[i]];
			}
		},
	};
};

const deck1 = makeNewDeck();
const deck2 = makeNewDeck();
deck1.initializeDeck();
deck2.initializeDeck();
deck1.drawMultiple(7);
deck2.drawMultiple(10);

const colors = [
	"red",
	"orange",
	"blue",
	"yellow",
	"green",
	"indigo",
	"violet",
];
