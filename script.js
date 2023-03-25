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

const myProject = [{
  featuredTitle: 'Featured Speakers',
  img1: 'image/featured_img_1.png',
  h3: 'Yochai Benkler',
  h5: 'Benkler is a renowned professor at Harbard Law School',
  h6: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
},
{
  img2: 'image/feature-img2.png',
  h3: 'Ayub Bachchu',
  h5: 'Benkler is a renowned professor at Harbard Law School',
  h6: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

}, {
  img3: 'image/feature-img3.png',
  h3: 'Anuradha Paroal',
  h5: 'Benkler is a renowned professor at Harbard Law School',
  h6: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}, {
  img4: 'image/feature-img4.png',
  h3: 'James Khan',
  h5: 'Benkler is a renowned professor at Harbard Law School',
  h6: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}, {
  img5: 'image/feature-img5.png',
  h3: 'Abdul Hadi',
  h5: 'Benkler is a renowned professor at Harbard Law School',
  h6: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}, {
  img6: 'image/feature-img6.png',
  h3: 'Mitali Muckargi',
  h5: 'Benkler is a renowned professor at Harbard Law School',
  h6: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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
   <img src=${myProject[0].img1} alt="" />
 </div>
 <article class="featured-article">
   <h3>${myProject[0].h3}</h3>
   <h5 class="feature-desig">
   ${myProject[0].h5}
   </h5>

   <h6 class="featured-details">
   ${myProject[0].h6}
   </h6>
 </article>
</div>
<div class="feature-1">
     <div class="featured-img">
       <img src=${myProject[1].img2} alt="" />
     </div>
     <article class="featured-article">
       <h3>${myProject[1].h3}</h3>
       <h5 class="feature-desig">
       ${myProject[1].h5}       </h5>

       <h6 class="featured-details">
       ${myProject[1].h6}
       </h6>
     </article>
   </div>
   <div class="feature-1">
     <div class="featured-img">
       <img src=${myProject[2].img3} alt="" />
     </div>
     <article class="featured-article">
       <h3>${myProject[2].h3}</h3>
       <h5 class="feature-desig">
       ${myProject[2].h5}       </h5>

       <h6 class="featured-details">
       ${myProject[2].h6}
       </h6>
     </article>
   </div>
   <div class="feature-1">
   <div class="featured-img">
     <img src=${myProject[3].img4} alt="" />
   </div>
   <article class="featured-article">
     <h3>${myProject[3].h3}</h3>
     <h5 class="feature-desig">
     ${myProject[3].h5}     </h5>

     <h6 class="featured-details">
     ${myProject[3].h6}
     </h6>
   </article>
 </div>
 <section class="feature-1">
 <div class="featured-img">
   <img src=${myProject[4].img5} alt="" />
 </div>
 <article class="featured-article">
   <h3>${myProject[4].h3}</h3>
   <h5 class="feature-desig">
   ${myProject[4].h5}   </h5>

   <h6 class="featured-details">
   ${myProject[4].h6}
   </h6>
 </article>
</section>
<div class="feature-1">
     <div class="featured-img">
       <img src=${myProject[5].img6} alt="" />
     </div>
     <article class="featured-article">
       <h3>${myProject[5].h3}</h3>
       <h5 class="feature-desig">
       ${myProject[5].h5}       </h5>

       <h6 class="featured-details">
       ${myProject[5].h6}
       </h6>
     </article>
   </div>
 </div>`;
}
feature();
