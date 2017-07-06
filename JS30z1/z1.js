window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    if(audio != null)
    {
        audio.currentTime = 0;
        audio.play();
    }
});

function removeTransition(e){
    if(e.propertyName == 'transform'){
        this.classList.remove('playing');
    };
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
