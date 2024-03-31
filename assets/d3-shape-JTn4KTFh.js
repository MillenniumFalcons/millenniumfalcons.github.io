import{P as F}from"./d3-path-B_10WkFA.js";function c(t){return function(){return t}}const C=1e-12,G=Math.PI,S=2*G;function H(t){let n=3;return t.digits=function(i){if(!arguments.length)return n;if(i==null)n=null;else{const e=Math.floor(i);if(!(e>=0))throw new RangeError(`invalid digits: ${i}`);n=e}return t},()=>new F(n)}function E(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function q(t){this._context=t}q.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n);break}}};function J(t){return new q(t)}function K(t){return t[0]}function Q(t){return t[1]}function st(t,n){var i=c(!0),e=null,s=J,o=null,_=H(r);t=typeof t=="function"?t:t===void 0?K:c(t),n=typeof n=="function"?n:n===void 0?Q:c(n);function r(u){var l,h=(u=E(u)).length,a,p=!1,f;for(e==null&&(o=s(f=_())),l=0;l<=h;++l)!(l<h&&i(a=u[l],l,u))===p&&((p=!p)?o.lineStart():o.lineEnd()),p&&o.point(+t(a,l,u),+n(a,l,u));if(f)return o=null,f+""||null}return r.x=function(u){return arguments.length?(t=typeof u=="function"?u:c(+u),r):t},r.y=function(u){return arguments.length?(n=typeof u=="function"?u:c(+u),r):n},r.defined=function(u){return arguments.length?(i=typeof u=="function"?u:c(!!u),r):i},r.curve=function(u){return arguments.length?(s=u,e!=null&&(o=s(e)),r):s},r.context=function(u){return arguments.length?(u==null?e=o=null:o=s(e=u),r):e},r}function U(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function Z(t){return t}function rt(){var t=Z,n=U,i=null,e=c(0),s=c(S),o=c(0);function _(r){var u,l=(r=E(r)).length,h,a,p=0,f=new Array(l),g=new Array(l),v=+e.apply(this,arguments),m=Math.min(S,Math.max(-S,s.apply(this,arguments)-v)),y,P=Math.min(Math.abs(m)/l,o.apply(this,arguments)),O=P*(m<0?-1:1),x;for(u=0;u<l;++u)(x=g[f[u]=u]=+t(r[u],u,r))>0&&(p+=x);for(n!=null?f.sort(function(T,N){return n(g[T],g[N])}):i!=null&&f.sort(function(T,N){return i(r[T],r[N])}),u=0,a=p?(m-l*O)/p:0;u<l;++u,v=y)h=f[u],x=g[h],y=v+(x>0?x*a:0)+O,g[h]={data:r[h],index:u,value:x,startAngle:v,endAngle:y,padAngle:P};return g}return _.value=function(r){return arguments.length?(t=typeof r=="function"?r:c(+r),_):t},_.sortValues=function(r){return arguments.length?(n=r,i=null,_):n},_.sort=function(r){return arguments.length?(i=r,n=null,_):i},_.startAngle=function(r){return arguments.length?(e=typeof r=="function"?r:c(+r),_):e},_.endAngle=function(r){return arguments.length?(s=typeof r=="function"?r:c(+r),_):s},_.padAngle=function(r){return arguments.length?(o=typeof r=="function"?r:c(+r),_):o},_}function z(t,n,i){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-i),t._x2,t._y2)}function M(t,n){this._context=t,this._k=(1-n)/6}M.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:z(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:z(this,t,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};(function t(n){function i(e){return new M(e,n)}return i.tension=function(e){return t(+e)},i})(0);function $(t,n,i){var e=t._x1,s=t._y1,o=t._x2,_=t._y2;if(t._l01_a>C){var r=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,u=3*t._l01_a*(t._l01_a+t._l12_a);e=(e*r-t._x0*t._l12_2a+t._x2*t._l01_2a)/u,s=(s*r-t._y0*t._l12_2a+t._y2*t._l01_2a)/u}if(t._l23_a>C){var l=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,h=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*l+t._x1*t._l23_2a-n*t._l12_2a)/h,_=(_*l+t._y1*t._l23_2a-i*t._l12_2a)/h}t._context.bezierCurveTo(e,s,o,_,t._x2,t._y2)}function D(t,n){this._context=t,this._alpha=n}D.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:$(this,t,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const _t=function t(n){function i(e){return n?new D(e,n):new M(e,0)}return i.alpha=function(e){return t(+e)},i}(.5);function R(t){return t<0?-1:1}function I(t,n,i){var e=t._x1-t._x0,s=n-t._x1,o=(t._y1-t._y0)/(e||s<0&&-0),_=(i-t._y1)/(s||e<0&&-0),r=(o*s+_*e)/(e+s);return(R(o)+R(_))*Math.min(Math.abs(o),Math.abs(_),.5*Math.abs(r))||0}function L(t,n){var i=t._x1-t._x0;return i?(3*(t._y1-t._y0)/i-n)/2:n}function A(t,n,i){var e=t._x0,s=t._y0,o=t._x1,_=t._y1,r=(o-e)/3;t._context.bezierCurveTo(e+r,s+r*n,o-r,_-r*i,o,_)}function b(t){this._context=t}b.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:A(this,this._t0,L(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var i=NaN;if(t=+t,n=+n,!(t===this._x1&&n===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,A(this,L(this,i=I(this,t,n)),i);break;default:A(this,this._t0,i=I(this,t,n));break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=i}}};function X(t){this._context=new Y(t)}(X.prototype=Object.create(b.prototype)).point=function(t,n){b.prototype.point.call(this,n,t)};function Y(t){this._context=t}Y.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,i,e,s,o){this._context.bezierCurveTo(n,t,e,i,o,s)}};function ut(t){return new b(t)}function lt(t){return new X(t)}function B(t){this._context=t}B.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,i=t.length;if(i)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),i===2)this._context.lineTo(t[1],n[1]);else for(var e=V(t),s=V(n),o=0,_=1;_<i;++o,++_)this._context.bezierCurveTo(e[0][o],s[0][o],e[1][o],s[1][o],t[_],n[_]);(this._line||this._line!==0&&i===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}};function V(t){var n,i=t.length-1,e,s=new Array(i),o=new Array(i),_=new Array(i);for(s[0]=0,o[0]=2,_[0]=t[0]+2*t[1],n=1;n<i-1;++n)s[n]=1,o[n]=4,_[n]=4*t[n]+2*t[n+1];for(s[i-1]=2,o[i-1]=7,_[i-1]=8*t[i-1]+t[i],n=1;n<i;++n)e=s[n]/o[n-1],o[n]-=e,_[n]-=e*_[n-1];for(s[i-1]=_[i-1]/o[i-1],n=i-2;n>=0;--n)s[n]=(_[n]-s[n+1])/o[n];for(o[i-1]=(t[i]+s[i-1])/2,n=0;n<i-1;++n)o[n]=2*t[n+1]-s[n+1];return[s,o]}function ht(t){return new B(t)}function w(t,n){this._context=t,this._t=n}w.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var i=this._x*(1-this._t)+t*this._t;this._context.lineTo(i,this._y),this._context.lineTo(i,n)}break}}this._x=t,this._y=n}};function ct(t){return new w(t,.5)}function at(t){return new w(t,0)}function ft(t){return new w(t,1)}function d(t,n){if((_=t.length)>1)for(var i=1,e,s,o=t[n[0]],_,r=o.length;i<_;++i)for(s=o,o=t[n[i]],e=0;e<r;++e)o[e][1]+=o[e][0]=isNaN(s[e][1])?s[e][0]:s[e][1]}function k(t){for(var n=t.length,i=new Array(n);--n>=0;)i[n]=n;return i}function j(t,n){return t[n]}function tt(t){const n=[];return n.key=t,n}function pt(){var t=c([]),n=k,i=d,e=j;function s(o){var _=Array.from(t.apply(this,arguments),tt),r,u=_.length,l=-1,h;for(const a of o)for(r=0,++l;r<u;++r)(_[r][l]=[0,+e(a,_[r].key,l,o)]).data=a;for(r=0,h=E(n(_));r<u;++r)_[h[r]].index=r;return i(_,h),_}return s.keys=function(o){return arguments.length?(t=typeof o=="function"?o:c(Array.from(o)),s):t},s.value=function(o){return arguments.length?(e=typeof o=="function"?o:c(+o),s):e},s.order=function(o){return arguments.length?(n=o==null?k:typeof o=="function"?o:c(Array.from(o)),s):n},s.offset=function(o){return arguments.length?(i=o??d,s):i},s}function gt(t,n){if((e=t.length)>0){for(var i,e,s=0,o=t[0].length,_;s<o;++s){for(_=i=0;i<e;++i)_+=t[i][s][1]||0;if(_)for(i=0;i<e;++i)t[i][s][1]/=_}d(t,n)}}function vt(t,n){if((u=t.length)>0)for(var i,e=0,s,o,_,r,u,l=t[n[0]].length;e<l;++e)for(_=r=0,i=0;i<u;++i)(o=(s=t[n[i]][e])[1]-s[0])>0?(s[0]=_,s[1]=_+=o):o<0?(s[1]=r,s[0]=r+=o):(s[0]=0,s[1]=o)}function xt(t,n){if((s=t.length)>0){for(var i=0,e=t[n[0]],s,o=e.length;i<o;++i){for(var _=0,r=0;_<s;++_)r+=t[_][i][1]||0;e[i][1]+=e[i][0]=-r/2}d(t,n)}}function mt(t,n){if(!(!((_=t.length)>0)||!((o=(s=t[n[0]]).length)>0))){for(var i=0,e=1,s,o,_;e<o;++e){for(var r=0,u=0,l=0;r<_;++r){for(var h=t[n[r]],a=h[e][1]||0,p=h[e-1][1]||0,f=(a-p)/2,g=0;g<r;++g){var v=t[n[g]],m=v[e][1]||0,y=v[e-1][1]||0;f+=m-y}u+=a,l+=f*a}s[e-1][1]+=s[e-1][0]=i,u&&(i-=l/u)}s[e-1][1]+=s[e-1][0]=i,d(t,n)}}function nt(t){var n=t.map(it);return k(t).sort(function(i,e){return n[i]-n[e]})}function it(t){for(var n=-1,i=0,e=t.length,s,o=-1/0;++n<e;)(s=+t[n][1])>o&&(o=s,i=n);return i}function et(t){var n=t.map(W);return k(t).sort(function(i,e){return n[i]-n[e]})}function W(t){for(var n=0,i=-1,e=t.length,s;++i<e;)(s=+t[i][1])&&(n+=s);return n}function yt(t){return et(t).reverse()}function dt(t){var n=t.length,i,e,s=t.map(W),o=nt(t),_=0,r=0,u=[],l=[];for(i=0;i<n;++i)e=o[i],_<r?(_+=s[e],u.push(e)):(r+=s[e],l.push(e));return l.reverse().concat(u)}function kt(t){return k(t).reverse()}export{et as a,yt as b,dt as c,nt as d,k as e,kt as f,gt as g,vt as h,d as i,xt as j,mt as k,pt as l,rt as m,ut as n,at as o,ct as p,ht as q,lt as r,ft as s,J as t,_t as u,st as v};
