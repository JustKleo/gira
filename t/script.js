function url() {
    navigator.clipboard.writeText(`https://gocciolafr.github.io/gira/scarlet.json`).then(() => {
        copiatoModal.showModal();
    }).catch(err => {
        alert('Errore: ' + err);
    });
}