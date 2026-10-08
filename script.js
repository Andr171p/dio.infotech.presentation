(() => {
  const deck = document.getElementById('deck');
  const slides = [...document.querySelectorAll('[data-slide]')];
  const progress = document.getElementById('progress');
  const counter = document.getElementById('current-slide');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('demo-video');
  const openVideo = document.getElementById('open-video');
  const closeVideo = document.getElementById('close-video');
  let index = Math.max(0, Math.min(slides.length - 1, Number(location.hash.match(/^#slide-(\d+)$/)?.[1] ?? 1) - 1));

  function fit() {
    const scale = Math.min(window.innerWidth / 1600, window.innerHeight / 900);
    deck.style.transform = `scale(${scale})`;
  }

  function show(target) {
    index = Math.max(0, Math.min(slides.length - 1, target));
    slides.forEach((slide, position) => {
      const active = position === index;
      slide.classList.toggle('active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    counter.textContent = String(index + 1).padStart(2, '0');
    progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    history.replaceState(null, '', `#slide-${index + 1}`);
    document.title = `${String(index + 1).padStart(2, '0')} / ${slides.length} — DIO Consult`;
  }

  function hideVideo() {
    video.pause();
    modal.hidden = true;
    openVideo.focus();
  }

  prev.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));
  openVideo.addEventListener('click', () => {
    modal.hidden = false;
    closeVideo.focus();
  });
  closeVideo.addEventListener('click', hideVideo);
  modal.addEventListener('click', event => { if (event.target === modal) hideVideo(); });
  window.addEventListener('keydown', event => {
    if (!modal.hidden) {
      if (event.key === 'Escape') hideVideo();
      return;
    }
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key)) {
      event.preventDefault(); show(index + 1);
    } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
      event.preventDefault(); show(index - 1);
    } else if (event.key === 'Home') {
      event.preventDefault(); show(0);
    } else if (event.key === 'End') {
      event.preventDefault(); show(slides.length - 1);
    } else if (event.key.toLowerCase() === 'f' && !event.ctrlKey && !event.altKey && !event.metaKey) {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen?.();
    }
  });
  window.addEventListener('resize', fit, {passive:true});
  window.addEventListener('hashchange', () => {
    const requested = Number(location.hash.match(/^#slide-(\d+)$/)?.[1]);
    if (requested) show(requested - 1);
  });
  fit();
  show(index);
})();
