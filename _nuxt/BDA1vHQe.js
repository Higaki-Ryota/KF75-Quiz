const o=n=>{const r=[...n];for(let t=r.length-1;t>=0;t--){const e=Math.floor(Math.random()*(t+1));[r[t],r[e]]=[r[e],r[t]]}return r},a=(n,r)=>o(n).slice(0,r),s=window.setInterval;export{a as g,s};
