const cur = document.getElementById('cursor');
  if(cur){
    document.addEventListener('mousemove',e=>{
      cur.style.left = e.clientX + 'px';
      cur.style.top  = e.clientY + 'px';
    });
  }