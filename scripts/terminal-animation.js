// @tweakable Terminal Cursor Configuration
const terminalCursorConfig = {
  /* @tweakable Base cursor color - uses the same color as terminal text */
  baseColor: 'inherit',

  /* @tweakable Cursor color opacity (0.0 - 1.0) */
  colorOpacity: 1.0,

  /* @tweakable Cursor blink speed in milliseconds */
  blinkSpeed: 500,

  /* @tweakable Cursor blink opacity range [visible, invisible] */
  blinkOpacity: [1, 0],

  /* @tweakable Cursor character */
  character: '_',

  /* @tweakable Cursor width in pixels - increased for thickness */
  width: 12,

  /* @tweakable Cursor height in pixels - increased for prominence */
  height: 20,

  /* @tweakable Cursor border radius for subtle rounding */
  borderRadius: '3px',

  /* @tweakable Cursor thickness multiplier */
  thicknessMultiplier: 1.5
};

// @tweakable Welcome Message Typing Configuration
const welcomeMessageConfig = {
  /* @tweakable Base delay before starting welcome message typing */
  initialDelay: 1500,

  /* @tweakable Base typing speed for welcome message (milliseconds per character) */
  baseTypingSpeed: 30,
  
  /* @tweakable Randomness factor for typing speed to create natural variation */
  typingSpeedVariance: 15,

  /* @tweakable Maximum number of characters to type in a single burst */
  maxCharactersPerTyping: 3,

  /* @tweakable Minimum delay between character typing bursts */
  minBurstDelay: 50,

  /* @tweakable Maximum delay between character typing bursts */
  maxBurstDelay: 200,

  /* @tweakable Cursor configuration for welcome message */
  cursor: terminalCursorConfig,

  /* @tweakable Text to be typed */
  message: 'Hola Usuario de nuestro servicio. Le agradecemos por su confianza, le devolveremos el favor. Recuerda que aceptamos pagos en cuotas. Solo le pedimos que sea responsable y pueda pagar a tiempo. Muchas gracias por su atención!, ServiTech.'
};

// @tweakable Linux Boot Sequence Configuration
const linuxBootConfig = {
  /* @tweakable Total number of boot messages */
  totalMessages: 8,

  /* @tweakable Randomness factor for boot message generation */
  bootMessageRandomnessLevel: 0.2,

  /* @tweakable Base delay before starting boot sequence */
  initialDelay: 500,

  /* @tweakable Minimum typing speed for boot messages (milliseconds per character) */
  minTypingSpeed: 5,

  /* @tweakable Maximum typing speed for boot messages (milliseconds per character) */
  maxTypingSpeed: 10,

  /* @tweakable Delay between each boot message */
  messageSeparationDelay: 300,

  /* @tweakable Percentage chance of inserting a random message */
  randomMessageProbability: 0.2,

  /* @tweakable Color palette for boot messages */
  messageColorPalette: {
    standardMessageColor: '#01e0cc',
    warningMessageColor: '#ff4500',
    initMessageColor: '#32cd32'
  },

  /* @tweakable Enable or disable specific types of messages */
  messageTypeVisibility: {
    standardMessages: true,
    warningMessages: true,
    initMessages: true
  },

  /* @tweakable Maximum number of random messages to potentially insert */
  maxRandomMessages: 2,

  /* @tweakable Minimum and maximum length of random messages */
  randomMessageMinLength: 20,
  randomMessageMaxLength: 50,

  /* @tweakable Controls whether to shuffle boot messages for more variety */
  shuffleMessages: false,

  /* @tweakable Determines the minimum and maximum number of boot messages to display */
  minBootMessages: 5,
  maxBootMessages: 8,

  /* @tweakable Allows selective hiding of message types */
  hideMessageTypes: {
    standardMessages: false,
    warningMessages: false,
    initMessages: false
  },

  /* @tweakable Adds ability to inject custom messages */
  customMessages: []
};

// @tweakable Boot Message Filtering Configuration
const bootMessageFilterConfig = {
  /* @tweakable Enable specific filtering of boot messages */
  enableMessageFiltering: true,

  /* @tweakable List of exact message texts to exclude from boot sequence */
  excludedMessages: [
    '[    0.000007] Preparing ServiTech service environment...',
    '[    0.000004] Setting up network interfaces...'
  ],

  /* @tweakable Customize message filtering strategy (exact or partial match) */
  matchStrategy: 'exact', // Options: 'exact', 'partial', 'regex'

  /* @tweakable Option to log filtered messages for debugging */
  logFilteredMessages: false
};

// @tweakable Warning Message Configuration
const warningMessageConfig = {
  /* @tweakable Warning message text */
  defaultText: '[WARN] Nuevo cliente detectado',

  /* @tweakable Warning message color - uses predefined color from boot config */
  color: linuxBootConfig.messageColorPalette.warningMessageColor,

  /* @tweakable Blinking effect for warning messages */
  enableBlinkEffect: true,

  /* @tweakable Blink speed for warning message */
  blinkSpeed: 700, // milliseconds

  /* @tweakable Opacity range for blinking effect */
  blinkOpacityRange: [0.5, 1.0],

  /* @tweakable Add prefix or suffix to warning message */
  messagePrefix: '',
  messageSuffix: '',

  /* @tweakable Control display of warning icon */
  showWarningIcon: true,
  warningIcon: ''
};

// Linux-style boot messages with variations
const linuxBootMessages = [
  { text: '[    0.000000] Linux kernel 5.15.0-ServiTech starting...', color: linuxBootConfig.messageColorPalette.standardMessageColor },
  { text: '[    0.000001] Checking system integrity...', color: linuxBootConfig.messageColorPalette.initMessageColor },
  { text: '[    0.000003] Mounting root filesystem (/)...', color: linuxBootConfig.messageColorPalette.standardMessageColor },
  { text: '[    0.000005] Loading ServiTech system modules...', color: linuxBootConfig.messageColorPalette.standardMessageColor },
  { text: '[    0.000006] Authenticating system credentials...', color: linuxBootConfig.messageColorPalette.initMessageColor },
  { text: '[ WARN ] NUEVO CLIENTE DETECTADO', color: linuxBootConfig.messageColorPalette.warningMessageColor },
  { text: '[    0.000008] System iniciado correctamente!', color: linuxBootConfig.messageColorPalette.initMessageColor }
];

document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('termContent');
    if (!terminal) return;

    const bootSequence = [
        '[ 0.000000] ServiTech kernel loaded',
        '[ 0.000012] Initializing system services...OK',
        '[ 0.000023] Loading security modules...',
        '[ 0.000045] cargando interfaz ServiTech...',
        '[ 0.000089] Checking system integrity... OK',
        '[ WARNING ] Nuevo cliente detectado...',
        '[ 0.000234] System iniciado correctamente!'
    ];

    const welcomeMessage = 'Hola Usuario de nuestro servicio. Le agradecemos por su confianza, le devolveremos el favor. Recuerda que aceptamos pagos en cuotas. Solo le pedimos que sea responsable y pueda pagar a tiempo. Muchas gracias por su atención!, ServiTech._';

    async function simularEscritura(texto, velocidad = 30) {
        let resultado = '';
        for (const char of texto) {
            resultado += char;
            terminal.textContent = resultado + (char === '_' ? '' : '_');
            await new Promise(resolve => setTimeout(resolve, velocidad));
        }
    }

    async function iniciarSimulacion() {
        terminal.innerHTML = '';

        // Verificar si es un dispositivo móvil
        if (window.innerWidth <= 768) {
            // Forzar estilo directamente solo en móviles
            terminal.style.fontSize = '17px'; //tamaño fuente terminal móvil
            terminal.style.lineHeight = '1.2';
        } else {
            // Estilo para escritorio   
            terminal.style.fontSize = '30px'; //tamaño fuente terminal escritorio
            terminal.style.lineHeight = '1.0';
        }
        
        // Secuencia de inicio
        for (const mensaje of bootSequence) {
            let color = '#00c3ff'; // Color por defecto
            if (mensaje.includes('[ WARNING ] Nuevo cliente detectado')) {
                color = 'red'; // Color naranja para el warning
            } else if (mensaje.includes('cargando interfaz ServiTech...')) {
                color = 'yellow'; // Color violeta para el mensaje de carga
            } else if (mensaje.includes('[ 0.000234] System iniciado correctamente!')) {
                color = 'green'; // Color verde para el mensaje de finalización
            } else if (mensaje.includes('[ 0.000089] Checking system integrity...')) {
                color = 'aqua'; // Color verde aqua para el mensaje de integridad
            } else if (
                mensaje.includes('[ 0.000000] ServiTech kernel loaded') ||
                mensaje.includes('[ 0.000012] Initializing system services...') ||
                mensaje.includes('[ 0.000023] Loading security modules...')
            ) {
                color = 'white'; // Color blanco para los mensajes especificados
            }
            terminal.innerHTML += `<span style="color:${color}">${mensaje}</span><br>`;
            await new Promise(resolve => setTimeout(resolve, 200));
        }

        // Pausa adicional después del mensaje de finalización
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Pausa antes del mensaje de bienvenida
        await new Promise(resolve => setTimeout(resolve, 1000));
        terminal.innerHTML = ''; // Limpiar terminal
        
        // Escribir mensaje de bienvenida
        await simularEscritura(welcomeMessage);

        // Ocultar después de 8 segundos
        setTimeout(() => {
            terminal.style.opacity = '0';
            terminal.style.transition = 'opacity 0.5s ease';
        }, 8000);
    }

    iniciarSimulacion();
});