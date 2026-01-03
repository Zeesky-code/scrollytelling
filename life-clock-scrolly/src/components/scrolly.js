import scrollama from 'scrollama';
import { updateClock, rotateClock } from './clock.js';
import { clockData } from '../../data/time-use.js';

export function initScrolly(clockInstance) {
    const scroller = scrollama();

    scroller
        .setup({
            step: '#scrolly article .step',
            offset: 0.5,
            progress: true // Enable progress tracking for gearing effect
        })
        .onStepEnter((response) => {
            const { element, index } = response;
            const stepKey = element.dataset.step;

            // Highlight active step
            document.querySelectorAll('.step').forEach(step => step.classList.remove('is-active'));
            element.classList.add('is-active');

            // Update Center Text
            clockInstance.centerLabel.text(stepKey.toUpperCase());

            // Update Data based on step key
            // Mapping step keys to data keys
            let dataKey = 'global'; // default
            if (clockData[stepKey]) {
                dataKey = stepKey;
            }

            updateClock(clockInstance, clockData[dataKey]);
        })
        .onStepProgress((response) => {
            const { progress, index } = response;
            // Gearing effect: Rotate based on total progress (index + progress)
            // 360 degrees / 6 steps = 60 degrees per step? Or continuous?
            // Let's do a subtle continuous rotation: -15deg per full step
            const totalProgress = index + progress;
            const rotation = totalProgress * -30; // Rotate counter-clockwise
            rotateClock(clockInstance, rotation);
        });

    window.addEventListener('resize', scroller.resize);
}
