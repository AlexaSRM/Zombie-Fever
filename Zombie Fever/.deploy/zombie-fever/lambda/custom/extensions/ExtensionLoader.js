"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sfb_skill_1 = require("@alexa-games/sfb-skill");
class ExtensionLoader {
    constructor(param) {
        this.registeredExtensions = [
            new sfb_skill_1.AlexaExtension(),
            new sfb_skill_1.AlexaAPLExtension(param.locale, param.configAccessor),
            new sfb_skill_1.AlexaAudioPlayerExtension(param.locale, param.configAccessor),
            new sfb_skill_1.AlexaMonetizationExtension(param.locale, param.configAccessor)
        ];
    }
    getExtensions() {
        return this.registeredExtensions;
    }
}
exports.ExtensionLoader = ExtensionLoader;
