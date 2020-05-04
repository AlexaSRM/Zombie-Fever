import { InstructionExtension, InstructionExtensionParameter } from '@alexa-games/sfb-f';

/**
 * Custom Instruction Extension
 */
export class SampleCustomExtension implements InstructionExtension {
    public async pickRandomDay(param: InstructionExtensionParameter): Promise<void> {
        let randomDayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        param.storyState.randomDayName = randomDayName[Math.floor( Math.random() * randomDayName.length )];    
    }
}