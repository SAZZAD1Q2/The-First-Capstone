const toggle = document.querySelector('.toggle');
const crossMark = document.querySelector('.toggle-x');

const navLink = document.querySelector('.nav-mobile-links');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navLink.classList.toggle('active');
  crossMark.classList.toggle('active');
});

crossMark.addEventListener('click', () => {
  window.location.reload();
});

/* function mobileMenu() {
  navLink.classList.toggle('active');

} */

/* toggle.addEventListener('click', () => {
  navLink.classList.toggle('active');
  xmark.style.display= 'block';
}); */

const myProject = [{
  featuredTitle: 'Featured Speakers',
},
{

}];

/* feature speaker section trial */
function feature() {
  const featureSpeaker = document.querySelector('.featured-speaker');
  const h2 = document.createElement('h2');
  h2.className = 'featured-headline';
  h2.innerHTML = myProject[0].featuredTitle;
  featureSpeaker.appendChild(h2);
  featureSpeaker.innerHTML = ` <h2 class="featured-headline">Featured Speakers</h2>
  <img src="#" alt="" /> 
 <div class="allFeature">
 <div class="feature-1">
 <div class="featured-img">
   <img src="image/featured_img_1.png" alt="" />
 </div>
 <article class="featured-article">
   <h3>Yochai Benkler</h3>
   <h5 class="feature-desig">
     Benkler is a renowned professor at Harbard Law School
   </h5>

   <h6 class="featured-details">
     Lorem ipsum dolor sit amet consectetur adipisicing elit.
   </h6>
 </article>
</div>
<div class="feature-1">
     <div class="featured-img">
       <img src="image/feature-img2.png" alt="" />
     </div>
     <article class="featured-article">
       <h3>Yochai Benkler</h3>
       <h5 class="feature-desig">
         Benkler is a renowned professor at Harbard Law School
       </h5>

       <h6 class="featured-details">
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
       </h6>
     </article>
   </div>
   <div class="feature-1">
     <div class="featured-img">
       <img src="image/feature-img3.png" alt="" />
     </div>
     <article class="featured-article">
       <h3>Yochai Benkler</h3>
       <h5 class="feature-desig">
         Benkler is a renowned professor at Harbard Law School
       </h5>

       <h6 class="featured-details">
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
       </h6>
     </article>
   </div>
   <div class="feature-1">
   <div class="featured-img">
     <img src="image/feature-img4.png" alt="" />
   </div>
   <article class="featured-article">
     <h3>Yochai Benkler</h3>
     <h5 class="feature-desig">
       Benkler is a renowned professor at Harbard Law School
     </h5>

     <h6 class="featured-details">
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
     </h6>
   </article>
 </div>
 <section class="feature-1">
 <div class="featured-img">
   <img src="image/feature-img5.png" alt="" />
 </div>
 <article class="featured-article">
   <h3>Yochai Benkler</h3>
   <h5 class="feature-desig">
     Benkler is a renowned professor at Harbard Law School
   </h5>

   <h6 class="featured-details">
     Lorem ipsum dolor sit amet consectetur adipisicing elit.
   </h6>
 </article>
</section>
<div class="feature-1">
     <div class="featured-img">
       <img src="image/feature-img6.png" alt="" />
     </div>
     <article class="featured-article">
       <h3>Yochai Benkler</h3>
       <h5 class="feature-desig">
         Benkler is a renowned professor at Harbard Law School
       </h5>

       <h6 class="featured-details">
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
       </h6>
     </article>
   </div>
 </div>`;
}
feature();
/* feature speaker section start */

/* function featureInfo() {
  const headlineF = document.createElement('h2');
  headlineF.className = 'featured-headline';
  headlineF.textContent = myProject[0].featuredTitle;
  /* featureSpeader.appendChild(headlineF); */

const fImg = document.createElement('img');
fImg.src = '#';
/* featureSpeader.appendChild(fImg); */

/*  featureSpeader.innerHTML = `<div class="feature-1">
<div class="featured-img">
  <img src="image/featured_img_1.png" alt="" />
</div>
<article class="featured-article">
  <h3>Yochai Benkler</h3>
  <h5 class="feature-desig">
    Benkler is a renowned professor at Harbard Law School
  </h5>

  <h6 class="featured-details">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </h6>
</article>
</div>`;
}

featureInfo(); */
