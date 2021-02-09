const btn=document.getElementById('btn');
const container=document.querySelector('.container');
const section1=document.querySelector('.section1');
const section2=document.querySelector('.section2');
const section3=document.querySelector('.section3');
const section4=document.querySelector('.section4');
btn.addEventListener('click',()=>{
    const htmldata=`
    <div class="sub-part">
        <h2>To an amazing guy who has an even more amazing girlfriend!</h2>
        <img src="./img1.jpg" alt="" id="img1" class="img1">
        <button id="btn2" class="btn">There's more! Keep going</button>
    </div>
    `;
    section1.innerHTML=htmldata;
    section1.style.visibility="visible";
});
document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'btn2'){
          const htmldata2=`
    <div class="sub-part">
                <h2>God only knows what crazy things we have done for each other</h2>
                <img src="./img2.jpg" alt="" class="img1">
                <h3>That silly face is worth all the effort</h3>
                <button id="btn3" class="btn">More...</button>
            </div>
    `;
    section2.innerHTML=htmldata2;
     }
 });
 document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'btn3'){
          const htmldata=`
    <div class="sub-part">
                <h2>I love the way you hold me and miss the way you gently kiss my face to wake me up</h2>
                <img src="./img3.jpg" alt="" class="img1">
                <h3>It's the best feeling ever gogo baby</h3>
                <button id="btn4" class="btn">Even More...</button>
            </div>
    `;
    section3.innerHTML=htmldata;
     }
 });
 document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'btn4'){
          const htmldata=`
    <div class="sub-part">
                <h2>I don't have a ring to give you but for now through this page that I've created, I want to say </h2>
                <ul class="list">
                <li>I promise to be less hormonal and cause less trouble. I'm sorry :(</li>
                    <li>I promise to start listening to your advises before I make my decisions</li>
                    <li>I promise to be less impulsive</li>
                    <li>I promise that my love for you would increase everyday, even-though sometimes you irritate me kuch jada hi -_-</li>
                    <li>I promise to never leave your side because no matter what, in the end its not you and me. Its US.</li>
                </ul>
                <img src="./img4.jpg" alt="" class="img1">
                <button id="btn5" class="btn">Tap me</button>
            </div>
    `;
    section4.innerHTML=htmldata;
     }
 });
 

const photos=['./img1.jpg','./img2.jpg','./img3.jpg','./img4.jpg','./img5.jpg','./img6.jpg','./img7.jpg','./img8.jpg','./img9.jpg','./img10.jpg','./img11.jpg','./img12.jpg','./img13.jpg','./img14.jpg','./img15.jpg','./img16.jpg','./img17.jpg','./img18.jpg','./img19.jpg','./img20.jpg','./img21.jpg','./img22.jpg','./img23.jpg','./img24.jpg','./img25.jpg','./img26.jpg','./img27.jpg']
var position = 0;
var result = '';
var slideindex=0;
const section5=document.getElementById('section5');
document.addEventListener('click',(e)=>{
    if(e.target && e.target.id=='btn5'){
        container.removeChild(container.childNodes[0]);
        container.removeChild(container.childNodes[1]);
        container.removeChild(container.childNodes[2]);
        container.removeChild(container.childNodes[3]);
        var slideIndex = 0;
        showSlides();

        function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 4 seconds
        }
    }
})


