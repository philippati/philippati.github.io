// Initialize Lucide
lucide.createIcons();

// Modal Logic
const qrButton = document.getElementById('qrButton');
const gamesButton = document.getElementById('gamesButton');
const toolsButton = document.getElementById('toolsButton');
const qrmodal = document.getElementById('qr-modal');
const gamesModal = document.getElementById('games-modal');
const toolsModal = document.getElementById('tools-modal');
const gamesCloseButton = document.getElementById('gamesCloseButton');
const toolsCloseButton = document.getElementById('toolsCloseButton');
const bankmodal = document.getElementById('bank-modal');
const closeButton = document.getElementById('closeButton');
const closeqr = document.getElementById('closeqr');

const allqr = bankmodal.querySelectorAll('*');
const allqrclose = bankmodal.querySelectorAll('.close-btn');

const bdoqr = document.getElementById('bdo-qr');
const unionbankqr = document.getElementById('unionbank-qr');
const bpiqr = document.getElementById('bpi-qr');
const gcashqr = document.getElementById('gcash-qr');
const mayaqr = document.getElementById('maya-qr');
const maribankqr = document.getElementById('maribank-qr');
const tonikqr = document.getElementById('tonik-qr');
const unodigitalqr = document.getElementById('unodigital-qr');
const gotymeqr = document.getElementById('gotyme-qr');
const cimbqr = document.getElementById('cimb-qr');

const bdoButton = document.getElementById('bdo');
const unionbankButton = document.getElementById('unionbank');
const bpiButton = document.getElementById('bpi');
const gcashButton = document.getElementById('gcash');
const mayaButton = document.getElementById('maya');
const maribankButton = document.getElementById('maribank');
const tonikButton = document.getElementById('tonik');
const unodigitalButton = document.getElementById('unodigital');
const gotymeButton = document.getElementById('gotyme');
const cimbButton = document.getElementById('cimb');

qrButton.addEventListener('click', () => {
  qrmodal.classList.add('active');
  document.body.style.position = 'fixed'
  document.body.style.width = '100%';
});

gamesButton.addEventListener('click', () => {
  gamesModal.classList.add('active');
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
});

gamesCloseButton.addEventListener('click', () => {
  gamesModal.classList.remove('active');
  document.body.style.position = '';
  document.body.style.width = '';
});

toolsButton.addEventListener('click', () => {
  toolsModal.classList.add('active');
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
});

toolsCloseButton.addEventListener('click', () => {
  toolsModal.classList.remove('active');
  document.body.style.position = '';
  document.body.style.width = '';
});

bdoButton.addEventListener('click', () => {
  bankmodal.classList.add('active');
  bdoqr.classList.add('active');
});

unionbankButton.addEventListener('click', () => {
  bankmodal.classList.add('active');
  unionbankqr.classList.add('active');
});

bpiButton.addEventListener('click', () => {
  bankmodal.classList.add('active');
  bpiqr.classList.add('active');
});

gcashButton.addEventListener('click', () => {
  bankmodal.classList.add('active');
  gcashqr.classList.add('active');
});

mayaButton.addEventListener('click', () => {
  bankmodal.classList.add('active');
  mayaqr.classList.add('active');
});

maribankButton.addEventListener('click', () => {
  bankmodal.classList.add('active');
  maribankqr.classList.add('active');
});

tonikButton.addEventListener('click', () => {
  bankmodal.classList.add('active');
  tonikqr.classList.add('active');
});

unodigitalButton.addEventListener('click', () => {
  bankmodal.classList.add('active');
  unodigitalqr.classList.add('active');
});

gotymeButton.addEventListener('click', () => {
  bankmodal.classList.add('active');
  gotymeqr.classList.add('active');
});

cimbButton.addEventListener('click', () => {
  bankmodal.classList.add('active');
  cimbqr.classList.add('active');
});

closeButton.addEventListener('click', () => {
  qrmodal.classList.remove('active');
});

allqrclose.forEach(button => {
  button.addEventListener('click', () => {
    allqr.forEach( element => {
      element.classList.remove('active');
    });
    bankmodal.classList.remove('active');
  });
});


// Close when clicking outside the panel
window.addEventListener('click', (e) => {
  if (e.target == bankmodal) {
    bankmodal.classList.remove('active');
    allqr.forEach( element => {
      element.classList.remove('active');
    });
  } else if (e.target === qrmodal) {
    qrmodal.classList.remove('active');
    document.body.style.position = '';
    document.body.style.width = '';
  } else if (e.target === gamesModal) {
    gamesModal.classList.remove('active');
    document.body.style.position = '';
    document.body.style.width = '';
  } else if (e.target === toolsModal) {
    toolsModal.classList.remove('active');
    document.body.style.position = '';
    document.body.style.width = '';
  }
});

