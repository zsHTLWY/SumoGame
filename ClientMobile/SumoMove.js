import React, { useEffect } from 'react';
import { DeviceMotion } from 'react-native-sensors';


const MotionSensorComponent = () => {
    useEffect(() => {
        // Set update interval (in milliseconds) for motion updates
        DeviceMotion.setUpdateInterval(100); // Adjust the interval as needed

        // Add listener to receive the tilt data (alpha, beta, gamma)
        const motionListener = DeviceMotion.addListener(({ rotation }) => {
            let { beta, gamma } = rotation; // These are the tilt values

            // Clamp the values to be between -90 and 90 to avoid excessive tilt
            beta = Math.max(-90, Math.min(90, beta));
            gamma = Math.max(-90, Math.min(90, gamma));

            // Map the tilt values to percentages between -100 and 100
            const xPercent = (beta / 90) * 100; // Forward/Backward tilt
            const yPercent = (gamma / 90) * 100; // Left/Right tilt

            // Create player ID, here hardcoded to 0 (adjust as needed)
            const playerId = 1;

            // Send the tilt data (in percent) to your server using axios
            fetch(`http://localhost:3000/player/${playerId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    x: xPercent, // Forward/Backward tilt percentage
                    y: yPercent  // Left/Right tilt percentage
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Server received:', data);
                })
                .catch(error => {
                    console.error('Error sending data:', error);
                });
        });
        
        // Cleanup function to remove the listener when the component unmounts
        return () => {
            motionListener.remove();
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    // Return null since we don't want to render anything
    return null;
};

export default MotionSensorComponent;
