var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},i=e.parcelRequirefa48;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in t){var i=t[e];delete t[e];var r={id:e,exports:{}};return a[e]=r,i.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){t[e]=a},e.parcelRequirefa48=i),i.register("kspUu",(function(e,a){var t,i,r,n;t=e.exports,i="createMovieCard",r=()=>o,Object.defineProperty(t,i,{get:r,set:n,enumerable:!0,configurable:!0});const o=e=>e.results.map((e=>`<div id="card" class="card"><img class="card__poster" src='https://image.tmdb.org/t/p/w220_and_h330_face${e.poster_path}' alt=Poster of ${e.title} movie></a>\n    <div class="card__info">\n      <div class="card__quick-info">\n        <div class="card__movie-title">${e.title}</div>\n        <div class="card__movie-genre">${e.id}</div>\n        <div class="card__movie-release">${e.release_date}</div>\n      </div>\n      <div class="card__movie-rating">${Math.round(10*e.vote_average)/10}</div>\n    </div>\n  </div>`)).join("")})),i("kspUu");var r=i("kspUu");const n=document.querySelector(".cards-wrapper");(async()=>{const e=await(async()=>{try{const e=await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=fe36e1a920a96782eff1e1dab760f0ae&page=1");return await e.json()}catch(e){console.log(e.message)}})();await(async()=>{try{const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=fe36e1a920a96782eff1e1dab760f0ae&language=en-US");return await e.json()}catch(e){console.log(e.message)}})();n.innerHTML=await(0,r.createMovieCard)(e)})();
//# sourceMappingURL=index.902762f7.js.map
