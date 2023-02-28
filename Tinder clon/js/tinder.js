// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

//Constants
const urls = [
    'https://static.wikia.nocookie.net/twice/images/1/16/Ji_Hyo28.jpg/revision/latest?cb=20200924150800&path-prefix=es',
    'https://pbs.twimg.com/media/FPlYNvNakAgFUov.jpg:large',
    'https://upload.wikimedia.org/wikipedia/commons/5/5d/Dahyun_for_Marie_Claire_Korea_on_080322_%286%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/220701_Nayeon%28%EB%82%98%EC%97%B0%29_of_Twice_MusicBank_Fancam.jpg/800px-220701_Nayeon%28%EB%82%98%EC%97%B0%29_of_Twice_MusicBank_Fancam.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/20220121%E2%80%94Mina_%EB%AF%B8%EB%82%98_Campaign_Film%2C_Pearlygates_x_Twice_2022.jpg/640px-20220121%E2%80%94Mina_%EB%AF%B8%EB%82%98_Campaign_Film%2C_Pearlygates_x_Twice_2022.jpg'
];

//Variables
let cardCount = 0;

//Functions
function appendNewCard(){
    const card = new Card({
        imageUrl:urls[cardCount % 5],
        onDismiss: appendNewCard,
        onLike:()=>{
            like.style.animationPlayState = 'running';
            //Always trigger animation when toggling class
            like.classList.toggle('trigger');
        },
        onDislike:()=>{
            dislike.style.animationPlayState = 'running';
            //Always trigger animation when toggling class
            dislike.classList.toggle('trigger');
        }
    });
    //card.element.style.setProperty('--i', cardCount % 5);
    swiper.append(card.element);
    cardCount++;

    const cards = swiper.querySelectorAll('.card:not(.dismissing');
    cards.forEach((card, tinder)=>{
        card.style.setProperty('--i', tinder);
    });
}

//First 5 Cards
for(let i = 0; i < 5; i++) {
    appendNewCard();
}