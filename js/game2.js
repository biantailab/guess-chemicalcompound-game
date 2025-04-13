// 数据：元素周期表
const periodicTable = {
    'H': { atomicMass: 1.008, name: '氢' },
    'He': { atomicMass: 4.002, name: '氦' },
    'Li': { atomicMass: 6.941, name: '锂' },
    'Be': { atomicMass: 9.012, name: '铍' },
    'B': { atomicMass: 10.811, name: '硼' },
    'C': { atomicMass: 12.011, name: '碳' },
    'N': { atomicMass: 14.007, name: '氮' },
    'O': { atomicMass: 15.999, name: '氧' },
    'F': { atomicMass: 18.998, name: '氟' },
    'Ne': { atomicMass: 20.180, name: '氖' },
    'Na': { atomicMass: 22.990, name: '钠' },
    'Mg': { atomicMass: 24.305, name: '镁' },
    'Al': { atomicMass: 26.982, name: '铝' },
    'Si': { atomicMass: 28.085, name: '硅' },
    'P': { atomicMass: 30.974, name: '磷' },
    'S': { atomicMass: 32.065, name: '硫' },
    'Cl': { atomicMass: 35.453, name: '氯' },
    'Ar': { atomicMass: 39.948, name: '氩' },
    'K': { atomicMass: 39.098, name: '钾' },
    'Ca': { atomicMass: 40.078, name: '钙' },
    'Fe': { atomicMass: 55.845, name: '铁' },
    'Cu': { atomicMass: 63.546, name: '铜' },
    'Zn': { atomicMass: 65.38, name: '锌' },
    'Br': { atomicMass: 79.904, name: '溴' },
    'Ag': { atomicMass: 107.868, name: '银' },
    'I': { atomicMass: 126.904, name: '碘' },
    'Ba': { atomicMass: 137.327, name: '钡' },
    'Au': { atomicMass: 196.967, name: '金' }
};

// 数据：化合物状态
const compoundStates = {
    'H2O': '液体', 'CO2': '气体', 'NH3': '气体','HCHO':'液体','HCOOH':'液体',
    'CH4': '气体', 'C2H6': '气体', 'C3H8': '气体', 'C4H10': '气体', 'C2H4': '气体',
    'C2H2': '气体', 'HCl': '气体', 'HBr': '气体', 'HI': '气体', 'HF': '气体',
    'NaCl': '固体', 'KCl': '固体', 'MgCl2': '固体', 'CaCl2': '固体', 'BaCl2': '固体',
    'NaBr': '固体', 'KBr': '固体', 'NaI': '固体', 'KI': '固体', 'MgO': '固体',
    'CaO': '固体', 'BaO': '固体', 'FeO': '固体', 'Fe2O3': '固体', 'CuO': '固体',
    'ZnO': '固体', 'Al2O3': '固体', 'SiO2': '固体', 'Na2O': '固体', 'K2O': '固体',
    'NaF': '固体', 'KF': '固体', 'CaF2': '固体', 'MgF2': '固体', 'Na2S': '固体',
    'K2S': '固体', 'CaS': '固体', 'FeS': '固体', 'CuS': '固体', 'ZnS': '固体',
    'SO2': '气体', 'SO3': '气体', 'NO': '气体', 'NO2': '气体', 'N2O': '气体',
    'CO': '气体', 'CS2': '液体', 'H2S': '气体', 'PH3': '气体', 'SiH4': '气体',
    'CH3OH': '液体', 'C2H5OH': '液体', 'C3H7OH': '液体', 'C6H6': '液体', 'C7H8': '液体',
    'CH3Cl': '气体', 'CH2Cl2': '液体', 'CHCl3': '液体', 'CCl4': '液体', 'C2H5Cl': '气体',
    'NaOH': '固体', 'KOH': '固体', 'CaOH2': '固体', 'MgOH2': '固体', 'FeOH3': '固体',
    'CuSO4': '固体', 'Na2SO4': '固体', 'K2SO4': '固体', 'CaSO4': '固体', 'MgSO4': '固体',
    'FeSO4': '固体', 'ZnSO4': '固体', 'Al2SO43': '固体', 'Na2CO3': '固体', 'K2CO3': '固体',
    'CaCO3': '固体', 'MgCO3': '固体', 'FeCO3': '固体', 'CuCO3': '固体', 'ZnCO3': '固体',
    'AgCl': '固体', 'AgBr': '固体', 'AgI': '固体', 'AuCl3': '固体', 'NaNO3': '固体',
    'KNO3': '固体', 'CaNO32': '固体', 'MgNO32': '固体', 'FeNO33': '固体', 'CuNO32': '固体'
};

// 全局变量
const compounds = Object.keys(compoundStates);
let answer = '';
let answerState = '';
let answerMolecularWeight = 0;
let gameOver = false;
let guessCount = 0;
let cells = [];
let historyDiv = null;

// 初始化游戏
function initGame() {
    // 重置游戏状态
    answer = compounds[Math.floor(Math.random() * compounds.length)];
    answerState = compoundStates[answer];
    answerMolecularWeight = calculateMolecularWeight(answer);
    gameOver = false;
    guessCount = 0;

    // 清空游戏板
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    cells = [];
    for (let i = 0; i < 10; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameBoard.appendChild(cell);
        cells.push(cell);
    }

    // 清空历史记录
    historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';

    // 清空提示
    document.getElementById('hint').innerHTML = '';

    // 隐藏动画
    const winAnimation = document.getElementById('win-animation');
    winAnimation.classList.remove('show', 'hide');
    winAnimation.style.display = 'none';

    const failAnimation = document.getElementById('fail-animation');
    failAnimation.classList.remove('show', 'hide');
    failAnimation.style.display = 'none';

    // 恢复输入和按钮
    const formulaInput = document.getElementById('formula-input');
    const submitBtn = document.getElementById('submit-btn');
    const randomBtn = document.getElementById('random-btn');
    const revealBtn = document.getElementById('reveal-btn');
    const replayBtn = document.getElementById('replay-btn');

    formulaInput.disabled = false;
    submitBtn.disabled = false;
    randomBtn.disabled = false;
    revealBtn.disabled = false;
    replayBtn.disabled = false;
    formulaInput.value = '';

    // 移除旧的事件监听器
    const newSubmitBtn = submitBtn.cloneNode(true);
    submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);
    const newRandomBtn = randomBtn.cloneNode(true);
    randomBtn.parentNode.replaceChild(newRandomBtn, randomBtn);
    const newRevealBtn = revealBtn.cloneNode(true);
    revealBtn.parentNode.replaceChild(newRevealBtn, revealBtn);
    const newReplayBtn = replayBtn.cloneNode(true);
    replayBtn.parentNode.replaceChild(newReplayBtn, replayBtn);

    // 绑定新的事件监听器
    newSubmitBtn.addEventListener('click', () => {
        if (gameOver) return;
        const input = formulaInput.value.trim();
        if (input.length > 10) {
            showTooLongInputAnimation();
            return;
        }
        if (input.length === 0) {
            showEmptyInputAnimation();
            return;
        }
        handleGuess(input);
        formulaInput.value = '';
    });

    newRandomBtn.addEventListener('click', () => {
        if (gameOver) return;
        const randomIndex = Math.floor(Math.random() * compounds.length);
        const randomInput = compounds[randomIndex];
        handleGuess(randomInput);
        formulaInput.value = '';
    });

    newRevealBtn.addEventListener('click', () => {
        if (gameOver) return;
        gameOver = true;
        revealAnswerInBoard();
    });

    newReplayBtn.addEventListener('click', () => {
        restartGame();
    });
}

// 处理猜测
function handleGuess(input) {
    guessCount++;
    updateBoard(input);
}

// 将答案填入游戏板并显示状态和分子量
function revealAnswerInBoard() {
    // 清空格子
    cells.forEach(cell => {
        cell.textContent = '';
        cell.className = 'cell';
    });

    // 填充答案字符，仅对非空格字符添加颜色
    const answerChars = answer.padEnd(10, ' ').split('');
    answerChars.forEach((char, i) => {
        cells[i].textContent = char === ' ' ? '' : char;
        if (char !== ' ') {
            cells[i].classList.add('correct');
        }
    });

    // 显示状态和分子量
    const hintDiv = document.getElementById('hint');
    let hintText = `答案: ${answer}<br>`;
    hintText += `状态: <span class="state-correct">${answerState}</span><br>`;
    hintText += `分子量: ${answerMolecularWeight.toFixed(2)}`;
    hintDiv.innerHTML = hintText;

    // 禁用输入和按钮（除重玩按钮）
    document.getElementById('formula-input').disabled = true;
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('random-btn').disabled = true;
    document.getElementById('reveal-btn').disabled = true;
    // 重玩按钮保持启用
}

// 显示胜利动画
function showWinAnimation() {
    const winAnimation = document.getElementById('win-animation');
    winAnimation.style.display = 'block';
    winAnimation.classList.add('show');

    // 2秒后隐藏动画并显示答案信息
    setTimeout(() => {
        winAnimation.classList.remove('show');
        winAnimation.classList.add('hide');
        setTimeout(() => {
            winAnimation.style.display = 'none';
            winAnimation.classList.remove('hide');

            // 显示答案状态和分子量
            const hintDiv = document.getElementById('hint');
            let hintText = `答案: ${answer}<br>`;
            hintText += `状态: <span class="state-correct">${answerState}</span><br>`;
            hintText += `分子量: ${answerMolecularWeight.toFixed(2)}`;
            hintDiv.innerHTML = hintText;

            // 禁用输入和按钮（除重玩）
            document.getElementById('formula-input').disabled = true;
            document.getElementById('submit-btn').disabled = true;
            document.getElementById('random-btn').disabled = true;
            document.getElementById('reveal-btn').disabled = true;
        }, 500); // 等待淡出动画完成
    }, 2000); // 显示2秒
}

// 显示失败动画
function showFailAnimation() {
    const failAnimation = document.getElementById('fail-animation');
    failAnimation.textContent = `游戏失败！答案是 ${answer}`;
    failAnimation.style.display = 'block';
    failAnimation.classList.add('show');

    // 2秒后隐藏动画并显示答案信息
    setTimeout(() => {
        failAnimation.classList.remove('show');
        failAnimation.classList.add('hide');
        setTimeout(() => {
            failAnimation.style.display = 'none';
            failAnimation.classList.remove('hide');
            revealAnswerInBoard();
        }, 500); // 等待淡出动画完成
    }, 2000); // 显示2秒
}

// 显示空输入动画
function showEmptyInputAnimation() {
    const emptyInputAnimation = document.getElementById('empty-input-animation');
    emptyInputAnimation.style.display = 'block';
    emptyInputAnimation.classList.add('show');

    // 2秒后隐藏动画
    setTimeout(() => {
        emptyInputAnimation.classList.remove('show');
        emptyInputAnimation.classList.add('hide');
        setTimeout(() => {
            emptyInputAnimation.style.display = 'none';
            emptyInputAnimation.classList.remove('hide');
        }, 500); // 等待淡出动画完成
    }, 2000); // 显示2秒
}

// 显示超长输入动画
function showTooLongInputAnimation() {
    const tooLongInputAnimation = document.getElementById('too-long-input-animation');
    tooLongInputAnimation.style.display = 'block';
    tooLongInputAnimation.classList.add('show');

    // 2秒后隐藏动画
    setTimeout(() => {
        tooLongInputAnimation.classList.remove('show');
        tooLongInputAnimation.classList.add('hide');
        setTimeout(() => {
            tooLongInputAnimation.style.display = 'none';
            tooLongInputAnimation.classList.remove('hide');
        }, 500); // 等待淡出动画完成
    }, 2000); // 显示2秒
}

// 更新游戏板
function updateBoard(input) {
    // 清空格子
    cells.forEach(cell => {
        cell.textContent = '';
        cell.className = 'cell';
    });

    // 填充输入字符，仅对非空格字符判断颜色
    const inputChars = input.padEnd(10, ' ').split('');
    const answerChars = answer.padEnd(10, ' ').split('');
    const cellClasses = [];
    inputChars.forEach((char, i) => {
        cells[i].textContent = char === ' ' ? '' : char;
        if (char !== ' ') {
            if (char === answerChars[i]) {
                cells[i].classList.add('correct');
                cellClasses[i] = 'correct';
            } else if (answerChars.includes(char)) {
                cells[i].classList.add('present');
                cellClasses[i] = 'present';
            } else {
                cells[i].classList.add('absent');
                cellClasses[i] = 'absent';
            }
        }
    });

    // 更新历史记录
    addHistoryRow(input, cellClasses);

    // 更新提示
    updateHint(input);

    // 检查是否胜利
    if (input === answer) {
        gameOver = true;
        setTimeout(() => {
            showWinAnimation();
        }, 100);
    }
    // 检查是否达到10次猜测
    else if (guessCount >= 10) {
        gameOver = true;
        setTimeout(() => {
            showFailAnimation();
        }, 100);
    }
}

// 重新开始游戏
function restartGame() {
    initGame();
}

// 添加历史记录行
function addHistoryRow(input, cellClasses) {
    const row = document.createElement('div');
    row.classList.add('history-row');

    // 化学式
    const formulaDiv = document.createElement('div');
    formulaDiv.classList.add('history-formula');
    formulaDiv.textContent = input || '-';
    row.appendChild(formulaDiv);

    // 格子
    const cellsDiv = document.createElement('div');
    cellsDiv.classList.add('history-cells');
    const inputChars = input.padEnd(10, ' ').split('');
    for (let i = 0; i < 10; i++) {
        const cell = document.createElement('div');
        cell.classList.add('history-cell');
        cell.textContent = inputChars[i] === ' ' ? '' : inputChars[i];
        if (inputChars[i] !== ' ' && cellClasses[i]) {
            cell.classList.add(cellClasses[i]);
        }
        cellsDiv.appendChild(cell);
    }
    row.appendChild(cellsDiv);

    // 状态
    const stateDiv = document.createElement('div');
    stateDiv.classList.add('history-state');
    const inputState = compoundStates[input] || '未知';
    stateDiv.textContent = inputState;
    stateDiv.classList.add(inputState === answerState ? 'state-correct' : 'state-incorrect');
    row.appendChild(stateDiv);

    // 分子量
    const molecularDiv = document.createElement('div');
    molecularDiv.classList.add('history-molecular');
    const inputMolecularWeight = calculateMolecularWeight(input);
    if (inputMolecularWeight > 0) {
        molecularDiv.textContent = `${inputMolecularWeight.toFixed(2)} `;
        if (inputMolecularWeight > answerMolecularWeight) {
            molecularDiv.textContent += '⬆️';
        } else if (inputMolecularWeight < answerMolecularWeight) {
            molecularDiv.textContent += '⬇️';
        } else {
            molecularDiv.textContent += '✅';
        }
    } else {
        molecularDiv.textContent = '无效';
    }
    row.appendChild(molecularDiv);

    historyDiv.insertBefore(row, historyDiv.firstChild);
}

// 计算分子量
function calculateMolecularWeight(formula) {
    if (!formula) return 0;
    let molecularWeight = 0;
    let currentElement = '';
    let currentNumber = '';
    for (let char of formula) {
        if (/[A-Z]/.test(char)) {
            if (currentElement) {
                const count = parseInt(currentNumber) || 1;
                molecularWeight += (periodicTable[currentElement]?.atomicMass || 0) * count;
                currentNumber = '';
            }
            currentElement = char;
        } else if (/[a-z]/.test(char)) {
            currentElement += char;
        } else if (/\d/.test(char)) {
            currentNumber += char;
        }
    }
    // 处理最后一个元素
    if (currentElement) {
        const count = parseInt(currentNumber) || 1;
        molecularWeight += (periodicTable[currentElement]?.atomicMass || 0) * count;
    }
    return molecularWeight;
}

// 更新提示
function updateHint(input) {
    const hintDiv = document.getElementById('hint');
    let hintText = '';

    // 状态提示
    const inputState = compoundStates[input] || '未知';
    const stateClass = inputState === answerState ? 'state-correct' : 'state-incorrect';
    hintText += `状态: <span class="${stateClass}">${inputState}</span><br>`;

    // 分子量提示
    const inputMolecularWeight = calculateMolecularWeight(input);
    if (inputMolecularWeight > 0) {
        hintText += `分子量: ${inputMolecularWeight.toFixed(2)} `;
        if (inputMolecularWeight > answerMolecularWeight) {
            hintText += '⬆️';
        } else if (inputMolecularWeight < answerMolecularWeight) {
            hintText += '⬇️';
        } else {
            hintText += '✅';
        }
    } else {
        hintText += '分子量: 无效输入';
    }

    hintText += `<br>剩余猜测次数: ${10 - guessCount}`;
    hintDiv.innerHTML = hintText;
}

// 启动游戏
initGame();