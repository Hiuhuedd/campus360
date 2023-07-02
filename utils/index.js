
export const BASE_URL = "http://192.168.43.102:8000/"  


export const getFeatureViewAnimation = (animatedValue, outputX) => {
    const TRANSLATE_X_INPUT_RANGE = [0, 80];
    const translateY = {
      translateY: animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [0, -50],
        extrapolate: 'clamp',
      }),
    };
    return {
      transform: [
        {
          translateX: animatedValue.interpolate({
            inputRange: TRANSLATE_X_INPUT_RANGE,
            outputRange: [0, outputX],
            extrapolate: 'clamp',
          }),
        },
        translateY,
      ],
    };
  };