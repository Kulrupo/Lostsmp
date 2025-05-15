const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'service_pkhal13';
    const templateID = 'template_on5msno'; // substitua pelo seu se mudar

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar inscrição';
        alert('Inscrição enviada com sucesso!');
        this.reset();
      }, (err) => {
        btn.value = 'Enviar inscrição';
        alert('Erro ao enviar: ' + JSON.stringify(err));
      });
  });
