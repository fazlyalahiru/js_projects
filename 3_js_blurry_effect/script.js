var inputs = document.querySelectorAll('.controls input')

const handleChanges = (targetInput) => {
    const prefix = targetInput.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${targetInput.name}`, targetInput.value + prefix);
    console.log(targetInput.value);
}

inputs.forEach(targetInput => targetInput.addEventListener('change', () => handleChanges(targetInput)))
inputs.forEach(targetInput => targetInput.addEventListener('input', () => handleChanges(targetInput)))
