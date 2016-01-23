export default class LocalizationService {
    private labels: Object;

    constructor() {
        this.labels = {
            en: {
                start: 'Start',
                pause: 'Pause',
                resume: 'Resume'
            },
            es: {
                start: 'Iniciar',
                pause: 'Pausar',
                resume: 'Continuar'
            }
        };
    }

    getLocalizedLabels(code: string = 'en'): Object {
        return this.labels[code];
    }
}
