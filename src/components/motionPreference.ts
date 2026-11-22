// Kept outside the client provider so the server layout can import real values,
// not client references.
export const motionStorageKey = "motion";

// Applies a saved choice before the first paint, so a stored "off" never flashes motion.
export const motionPreferenceScript = `(function(){try{var choice=localStorage.getItem("${motionStorageKey}");if(choice==="on"||choice==="off")document.documentElement.dataset.motion=choice}catch(error){}})()`;
