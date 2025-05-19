const btn = document.getElementById('button');

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Verifica se o reCAPTCHA foi resolvido
    const captchaResponse = grecaptcha.getResponse();
    if (!captchaResponse) {
      alert('Por favor, verifique que você não é um robô.');
      return;
    }

    btn.value = 'Enviando...';

    const serviceID = 'service_pkhal13';
    const templateID = 'template_on5msno';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar inscrição';
        alert('Inscrição enviada com sucesso!');
        this.reset();
        grecaptcha.reset(); // reseta o captcha para o próximo envio
      }, (err) => {
        btn.value = 'Enviar inscrição';
        alert('Erro ao enviar: ' + JSON.stringify(err));
      });
  });

