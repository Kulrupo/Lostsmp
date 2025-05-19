// script.js
document.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
  });
  


  const form = document.getElementById('inscricaoForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // coletar dados do formulário
    const nickname = form.nickname.value.trim();
    const discord = form.discord.value.trim();
    const email = form.email.value.trim();
    const interesses = Array.from(form.querySelectorAll('input[name="interesses"]:checked')).map(i => i.value);
    const tempoJogo = form.tempoJogo.value;
    const motivo = form.motivo.value.trim();
  
    // aqui você pode processar os dados, validar mais, enviar pro EmailJS...
  
    console.log({
      nickname,
      discord,
      email,
      interesses,
      tempoJogo,
      motivo,
    });
  
    alert('Formulário enviado! Em breve você receberá uma resposta.');
  
    form.reset();
  });