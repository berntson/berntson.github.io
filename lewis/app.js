/* Tiny hash-router + renderer for the Uppsala guide. */
(function () {
  var D = window.DATA;
  function gmap(q){ return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q); }
  function sec(id){ return D.sections.find(function(s){return s.id===id;}); }

  function thumb(img){
    return img
      ? '<div class="thumb" style="background-image:url(\'img/'+img+'\')"></div>'
      : '<div class="thumb noimg"></div>';
  }
  function kidTag(t){ return t.tag==='kids' ? ' <span class="tag kids">kids</span>' : ''; }

  function card(t, base){
    return '<a class="thing" href="#/'+base+'/'+t.id+'">'+thumb(t.img)+
      '<div class="tbody"><h3>'+t.title+kidTag(t)+'</h3><p>'+t.blurb+'</p></div></a>';
  }
  function grid(things, base){
    return '<div class="things">'+things.map(function(t){return card(t,base);}).join('')+'</div>';
  }

  function places(ps){
    if(!ps||!ps.length) return '';
    return '<div class="places">'+ps.map(function(p){
      return '<div class="place"><h4>'+p.name+'</h4>'+
        (p.addr?'<p class="addr">'+p.addr+'</p>':'')+
        (p.hours?'<p class="hrs">'+p.hours+'</p>':'')+
        (p.maps?'<a class="maplink" href="'+gmap(p.maps)+'" target="_blank" rel="noopener">Open in Google Maps →</a>':'')+
        '</div>';
    }).join('')+'</div>';
  }
  function xlinks(ls){
    if(!ls||!ls.length) return '';
    return '<p class="xlinks">'+ls.map(function(l){
      return '<a href="'+l.url+'" target="_blank" rel="noopener">'+l.label+' →</a>';
    }).join(' · ')+'</p>';
  }

  function pageHead(title, intro){
    return '<div class="page-head"><h1>'+title+'</h1>'+(intro?'<p class="intro">'+intro+'</p>':'')+'</div>';
  }

  function welcomeView(){
    var w=D.welcome;
    return '<div class="hero"><div class="dot"></div><h1>'+w.title+'</h1><p>'+w.lead+'</p></div>'+
      '<section class="block"><p>'+w.body+'</p>'+
      '<p>Have a look around with the menu up top. Start with <a href="#/plan">the plan</a> for the shape of the week, or just wander.</p></section>';
  }
  function contentView(s){ return pageHead(s.title, s.intro)+'<main>'+s.html+'</main>'; }
  function thingsView(s){ return pageHead(s.title, s.intro)+grid(s.things, s.id); }
  function subView(s, sub){
    var tabs='<nav class="subnav">'+s.subs.map(function(x){
      return '<a class="sublink'+(x.id===sub.id?' on':'')+'" href="#/'+s.id+'/'+x.id+'">'+x.label+'</a>';
    }).join('')+'</nav>';
    return pageHead(s.title, s.intro)+tabs+grid(sub.things, s.id+'/'+sub.id);
  }
  function thingView(t, backHref, backLabel){
    return '<p class="back"><a href="'+backHref+'">← '+backLabel+'</a></p>'+
      (t.img?'<div class="hero-img" style="background-image:url(\'img/'+t.img+'\')"></div>':'')+
      '<h1 class="detail-h1">'+t.title+kidTag(t)+'</h1>'+
      '<p class="lead">'+t.blurb+'</p>'+
      (t.detail?'<div class="prose"><p>'+t.detail+'</p></div>':'')+
      places(t.places)+xlinks(t.links);
  }

  function setNav(active){
    var nav=document.getElementById('nav');
    nav.innerHTML='<a class="home" href="#/">Lewis Visit</a>'+
      D.sections.map(function(s){
        return '<a class="link'+(s.id===active?' on':'')+'" href="#/'+s.id+'">'+s.label+'</a>';
      }).join('');
  }

  function render(){
    var parts=location.hash.replace(/^#\/?/,'').split('/').filter(Boolean);
    var view=document.getElementById('view');
    setNav(parts[0]||'');
    if(!parts.length){ view.innerHTML=welcomeView(); scrollTo(0,0); return; }
    var s=sec(parts[0]);
    if(!s){ view.innerHTML=welcomeView(); return; }
    if(s.type==='content'){ view.innerHTML=contentView(s); }
    else if(s.type==='things'){
      if(parts[1]){
        var t=s.things.find(function(x){return x.id===parts[1];});
        view.innerHTML=t?thingView(t,'#/'+s.id,s.title):thingsView(s);
      } else view.innerHTML=thingsView(s);
    } else if(s.type==='sub'){
      var sub=s.subs.find(function(x){return x.id===parts[1];})||s.subs[0];
      if(parts[2]){
        var t2=sub.things.find(function(x){return x.id===parts[2];});
        view.innerHTML=t2?thingView(t2,'#/'+s.id+'/'+sub.id,sub.label):subView(s,sub);
      } else view.innerHTML=subView(s,sub);
    }
    scrollTo(0,0);
  }

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', render);
})();
