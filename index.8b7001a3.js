var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequirefa48;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){o[e]=t},e.parcelRequirefa48=n),n.register("40lI0",(function(e,t){n("kspUu"),n("3lgLD");document.querySelector("[data-modal-open]"),document.querySelector(".card"),document.querySelector(".modal__window");const o=document.querySelector("[data-modal-close]"),r=document.querySelector("[data-modal]");function d(){r.classList.toggle("is-hidden")}function d(){r.classList.toggle("is-hidden")}document.addEventListener("keydown",(function(e){"Escape"===e.key&&r.classList.add("is-hidden")}));document.querySelector(".cards-wrapper").addEventListener("click",(function(e){(function(e){(async function(e){const t=await fetch(`${i}/${e}?api_key=${l}`);return t.json()})(e).then((e=>{const t=e,o={title:t.title,vote_average:t.vote_average,vote_count:t.vote_count,popularity:t.popularity,originalTitle:t.original_title,overview:t.overview,poster_path:t.poster_path};console.log(o);let n=document.querySelector(".modal");const r=document.querySelector("[data-modal-close]"),d=document.querySelector(".modal__poster"),l=document.querySelector("h2.modal__title"),i=document.getElementById("queryVoteRating"),c=(document.getElementById("queryVoteCount"),document.getElementById("queryPopularity")),a=document.getElementById("queryOriginalTitle"),u=document.querySelector(".modal__summary-text");n.classList.remove("is-hidden"),d.src=`https://image.tmdb.org/t/p/w220_and_h330_face/${o.poster_path}`,l.innerHTML=`${o.title}`,console.log(`${o.title}`),i.innerHTML=`${o.vote_average}`,c.innerHTML=`${o.popularity}`,a.innerHTML=`${o.originalTitle}`,u.innerHTML=`${o.overview}`,r.addEventListener("click",(()=>{n.classList.add("is-hidden")}))}))})(e.target.dataset.id),d()})),o.addEventListener("click",d);document.querySelector("h2.modal__title"),document.getElementById("queryVoteRating"),document.getElementById("queryVoteCount"),document.getElementById("queryPopularity"),document.getElementById("queryOriginalTitle"),document.getElementById("queryGenre"),document.querySelector(".modal__poster"),document.querySelector(".modal__summary-text"),document.querySelector(".card"),document.querySelector(".header-search-bar__input");const l="dbea77d3eb5b3622b027f73f6a5032fe",i="https://api.themoviedb.org/3/movie/"})),n.register("kspUu",(function(e,t){})),n.register("3lgLD",(function(e,t){!function(){const e=document.getElementById("addToWatched"),t=document.getElementById("addToQueue");let o="watched-movies",n="queued-movies";e.addEventListener("click",(function(){const e=document.querySelector("h2.modal__title").innerHTML,t=JSON.parse(localStorage.getItem(o)||"[]");t.includes(e)?console.log(e+" already exists"):(t.push(e),localStorage.setItem(o,JSON.stringify(t)))})),t.addEventListener("click",(function(){const e=document.querySelector("h2.modal__title").innerHTML,t=JSON.parse(localStorage.getItem(n)||"[]");t.includes(e)?console.log(e+" already exists"):(t.push(e),localStorage.setItem(n,JSON.stringify(t)))}))}()})),n("40lI0");
//# sourceMappingURL=index.8b7001a3.js.map
