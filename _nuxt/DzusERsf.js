import{q as p,_ as g,a as z,b as T}from"./CPIReT2R.js";import{f as C}from"./BKvA_bZx.js";import{d as N,r as e,g as B,v as L,z as h,J as f,K as d,L as A,t as v}from"./B23GM--K.js";const J=N({__name:"test",setup(E){const D={apiKey:"AIzaSyD1LeqIBFxE6wU2gE2xDTeSV_O4xTQSazw",authDomain:"kf75-8d355.firebaseapp.com",projectId:"kf75-8d355",storageBucket:"kf75-8d355.firebasestorage.app",messagingSenderId:"385498511746",appId:"1:385498511746:web:9fc5581c8479ac83abf79b"};C.initializeApp(D);const t=e("menu"),n=e(0),w=[["初級","（小中学生向け）","制限時間：60秒"],["中級","（高校生向け）","制限時間：60秒"],["上級","（大学生向け）","制限時間：60秒"]],y=o=>{n.value=o,t.value="question",u.value=Date.now()},a=e(0),s=e(0),_=e(0),i=e(null),l=e(!1),c=e(!1),r=e(!1),u=e(0),m=e(0),b=o=>{l.value===!1&&(m.value=Date.now(),l.value=!0,o?(s.value++,i.value="正解！",c.value=!0):(_.value++,i.value="不正解",r.value=!0),m.value<u.value+2e3?setTimeout(()=>{a.value++,u.value=Date.now(),l.value=!1,c.value=!1,r.value=!1},3e3+u.value-m.value):setTimeout(()=>{a.value++,u.value=Date.now(),l.value=!1,c.value=!1,r.value=!1},1e3)),a.value>p[n.value].length&&(t.value="result")},q=()=>{t.value="menu",a.value=0,s.value=0,_.value=0};return(o,V)=>{const x=B("a-background"),S=T,k=g,I=z;return v(),L("div",null,[h(x),t.value==="menu"?(v(),f(S,{key:0,onSelect:y,Levels:w})):t.value==="question"?(v(),f(k,{key:1,count:1e7,correctIndex:d(p)[n.value][a.value],quizIndex:a.value,quizNumber:a.value,level:n.value,correctNumber:s.value,answerState:i.value,answerDisplay:l.value,answerIndex:a.value*4+d(p)[n.value][a.value]+1,correctDisplay:c.value,incorrectDisplay:r.value,onSelect:b,onTimeout:o.timeout},null,8,["correctIndex","quizIndex","quizNumber","level","correctNumber","answerState","answerDisplay","answerIndex","correctDisplay","incorrectDisplay","onTimeout"])):t.value==="result"?(v(),f(I,{key:2,"correct-count":s.value,onSelect:q},null,8,["correct-count"])):A("",!0)])}}});export{J as default};
