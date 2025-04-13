// 数据：元素周期表
const periodicTable = {
    'H': { atomicMass: 1.008, name: '氢' },
    'He': { atomicMass: 4.002602, name: '氦' },
    'Li': { atomicMass: 6.941, name: '锂' },
    'Be': { atomicMass: 9.012182, name: '铍' },
    'B': { atomicMass: 10.811, name: '硼' },
    'C': { atomicMass: 12.0107, name: '碳' },
    'N': { atomicMass: 14.0067, name: '氮' },
    'O': { atomicMass: 15.9994, name: '氧' },
    'F': { atomicMass: 18.9984032, name: '氟' },
    'Ne': { atomicMass: 20.1797, name: '氖' },
    'Na': { atomicMass: 22.98976928, name: '钠' },
    'Mg': { atomicMass: 24.3050, name: '镁' },
    'Al': { atomicMass: 26.9815386, name: '铝' },
    'Si': { atomicMass: 28.0855, name: '硅' },
    'P': { atomicMass: 30.973762, name: '磷' },
    'S': { atomicMass: 32.065, name: '硫' },
    'Cl': { atomicMass: 35.453, name: '氯' },
    'Ar': { atomicMass: 39.948, name: '氩' },
    'K': { atomicMass: 39.0983, name: '钾' },
    'Ca': { atomicMass: 40.078, name: '钙' },
    'Sc': { atomicMass: 44.955912, name: '钪' },
    'Ti': { atomicMass: 47.867, name: '钛' },
    'V': { atomicMass: 50.9415, name: '钒' },
    'Cr': { atomicMass: 51.9961, name: '铬' },
    'Mn': { atomicMass: 54.938045, name: '锰' },
    'Fe': { atomicMass: 55.845, name: '铁' },
    'Co': { atomicMass: 58.933195, name: '钴' },
    'Ni': { atomicMass: 58.6934, name: '镍' },
    'Cu': { atomicMass: 63.546, name: '铜' },
    'Zn': { atomicMass: 65.38, name: '锌' },
    'Ga': { atomicMass: 69.723, name: '镓' },
    'Ge': { atomicMass: 72.64, name: '锗' },
    'As': { atomicMass: 74.92160, name: '砷' },
    'Se': { atomicMass: 78.96, name: '硒' },
    'Br': { atomicMass: 79.904, name: '溴' },
    'Kr': { atomicMass: 83.798, name: '氪' },
    'Rb': { atomicMass: 85.4678, name: '铷' },
    'Sr': { atomicMass: 87.62, name: '锶' },
    'Y': { atomicMass: 88.90585, name: '钇' },
    'Zr': { atomicMass: 91.224, name: '锆' },
    'Nb': { atomicMass: 92.90638, name: '铌' },
    'Mo': { atomicMass: 95.96, name: '钼' },
    'Tc': { atomicMass: 98, name: '锝' },
    'Ru': { atomicMass: 101.07, name: '钌' },
    'Rh': { atomicMass: 102.90550, name: '铑' },
    'Pd': { atomicMass: 106.42, name: '钯' },
    'Ag': { atomicMass: 107.8682, name: '银' },
    'Cd': { atomicMass: 112.411, name: '镉' },
    'In': { atomicMass: 114.818, name: '铟' },
    'Sn': { atomicMass: 118.710, name: '锡' },
    'Sb': { atomicMass: 121.760, name: '锑' },
    'Te': { atomicMass: 127.60, name: '碲' },
    'I': { atomicMass: 126.90447, name: '碘' },
    'Xe': { atomicMass: 131.293, name: '氙' },
    'Cs': { atomicMass: 132.9054519, name: '铯' },
    'Ba': { atomicMass: 137.327, name: '钡' },
    'La': { atomicMass: 138.90547, name: '镧' },
    'Ce': { atomicMass: 140.116, name: '铈' },
    'Pr': { atomicMass: 140.90765, name: '镨' },
    'Nd': { atomicMass: 144.242, name: '钕' },
    'Pm': { atomicMass: 145, name: '钷' },
    'Sm': { atomicMass: 150.36, name: '钐' },
    'Eu': { atomicMass: 151.964, name: '铕' },
    'Gd': { atomicMass: 157.25, name: '钆' },
    'Tb': { atomicMass: 158.92535, name: '铽' },
    'Dy': { atomicMass: 162.500, name: '镝' },
    'Ho': { atomicMass: 164.93032, name: '钬' },
    'Er': { atomicMass: 167.259, name: '铒' },
    'Tm': { atomicMass: 168.93421, name: '铥' },
    'Yb': { atomicMass: 173.054, name: '镱' },
    'Lu': { atomicMass: 174.9668, name: '镥' },
    'Hf': { atomicMass: 178.49, name: '铪' },
    'Ta': { atomicMass: 180.94788, name: '钽' },
    'W': { atomicMass: 183.84, name: '钨' },
    'Re': { atomicMass: 186.207, name: '铼' },
    'Os': { atomicMass: 190.23, name: '锇' },
    'Ir': { atomicMass: 192.217, name: '铱' },
    'Pt': { atomicMass: 195.084, name: '铂' },
    'Au': { atomicMass: 196.966569, name: '金' },
    'Hg': { atomicMass: 200.59, name: '汞' },
    'Tl': { atomicMass: 204.3833, name: '铊' },
    'Pb': { atomicMass: 207.2, name: '铅' },
    'Bi': { atomicMass: 208.98040, name: '铋' },
    'Po': { atomicMass: 209, name: '钋' },
    'At': { atomicMass: 210, name: '砹' },
    'Rn': { atomicMass: 222, name: '氡' },
    'Fr': { atomicMass: 223, name: '钫' },
    'Ra': { atomicMass: 226, name: '镭' },
    'Ac': { atomicMass: 227, name: '锕' },
    'Th': { atomicMass: 232.03806, name: '钍' },
    'Pa': { atomicMass: 231.03588, name: '镤' },
    'U': { atomicMass: 238.02891, name: '铀' },
    'Np': { atomicMass: 237, name: '镎' },
    'Pu': { atomicMass: 244, name: '钚' },
    'Am': { atomicMass: 243, name: '镅' },
    'Cm': { atomicMass: 247, name: '锔' },
    'Bk': { atomicMass: 247, name: '锫' },
    'Cf': { atomicMass: 251, name: '锿' },
    'Es': { atomicMass: 252, name: '锶' },
    'Fm': { atomicMass: 257, name: '镄' },
    'Md': { atomicMass: 258, name: '钔' },
    'No': { atomicMass: 259, name: '锘' },
    'Lr': { atomicMass: 262, name: '铹' },
    'Rf': { atomicMass: 267, name: '𬬭' },
    'Db': { atomicMass: 268, name: '𬭊' },
    'Sg': { atomicMass: 271, name: '𬭳' },
    'Bh': { atomicMass: 272, name: '𬭛' },
    'Hs': { atomicMass: 270, name: '𬭶' },
    'Mt': { atomicMass: 276, name: '𬭻' },
    'Ds': { atomicMass: 281, name: '𬭳' },
    'Rg': { atomicMass: 280, name: '𬮄' },
    'Cn': { atomicMass: 285, name: '𬭶' },
    'Nh': { atomicMass: 284, name: '𬭶' },
    'Fl': { atomicMass: 289, name: '𬭶' },
    'Mc': { atomicMass: 288, name: '𬭶' },
    'Lv': { atomicMass: 293, name: '𬭶' },
    'Ts': { atomicMass: 294, name: '石田' },
    'Og': { atomicMass: 294, name: '气奥' }
};

// 数据：化合物状体
const compoundStates = {
    'H2O': '液体', 'CO2': '气体', 'NH3': '气体','HCHO':'液体','HCOOH':'液体', 'k2HPO4': '固体', 'CaC2': '固体',
    'CH4': '气体', 'C2H6': '气体', 'C3H8': '气体', 'C2H4': '气体', 'BeCl2': '固体', 'KH2PO4': '固体', 'B4C': '固体',
    'C2H2': '气体', 'HCl': '气体', 'HBr': '气体', 'HI': '气体', 'HF': '气体', 'Na2S2O8': '固体', 'NH4SCN': '固体',
    'NaCl': '固体', 'KCl': '固体', 'MgCl2': '固体', 'CaCl2': '固体', 'BaCl2': '固体', 
    'NaBr': '固体', 'KBr': '固体', 'NaI': '固体', 'KI': '固体', 'MgO': '固体', 'LiSO4': '固体', 'Na2SO3': '固体',
    'CaO': '固体', 'BaO': '固体', 'FeO': '固体', 'Fe2O3': '固体', 'CuO': '固体', 'LiCO3': '固体', 'NaS2O4': '固体',
    'ZnO': '固体', 'Al2O3': '固体', 'SiO2': '固体', 'Na2O': '固体', 'K2O': '固体', 'Licl': '固体', 'KCr(SO4)2': '固体',
    'NaF': '固体', 'KF': '固体', 'CaF2': '固体', 'MgF2': '固体', 'Na2S': '固体', 'Na2B4O7': '固体', '(NH4)2S2O8': '固体',
    'K2S': '固体', 'CaS': '固体', 'FeS': '固体', 'CuS': '固体', 'ZnS': '固体', 'H3BO3': '固体', 'Sm(SO4)3': '固体',
    'SO2': '气体', 'SO3': '气体', 'NO': '气体', 'NO2': '气体', 'N2O': '气体', 'LiAlH4': '固体', 'NaCN': '固体',
    'CO': '气体', 'CS2': '液体', 'H2S': '气体', 'PH3': '气体', 'SiH4': '气体', 'KBH4': '固体', 'KCN': '固体',
    'CH3OH': '液体', 'C2H5OH': '液体',  'CH3OCH3': '气体', 'C2H5OC2H5': '液体', 'NaBH4': '固体', 'ZrOCl2': '固体',
    'C3H7OH': '液体','C6H6': '液体', 'C6H5CH3': '液体', 'C6H5C2H5': '液体', 'HSbF6': '液体', 'N2H4': '气体',
    'CH3Cl': '气体', 'CH2Cl2': '液体', 'CHCl3': '液体', 'CCl4': '液体', 'C2H5Cl': '气体', 'CsOH': '固体',
    'NaOH': '固体', 'KOH': '固体', '(NH4)2SO4': '固体', 'Ca(OH)2': '固体', 'Mg(OH)2': '固体', 'Cu(OH)2': '固体',
    'Fe(OH)3': '固体', 'CuSO4': '固体', 'Na2SO4': '固体', 'K2SO4': '固体', 'CaSO4': '固体', 'C6H5COOH': '固体',
    'MgSO4': '固体', 'FeSO4': '固体', 'ZnSO4': '固体', 'Na2CO3': '固体', 'K2CO3': '固体', 'H2NCH2COOH': '固体',
    'CaCO3': '固体', 'MgCO3': '固体', 'FeCO3': '固体', 'CuCO3': '固体', 'ZnCO3': '固体', 'KAl(SO4)2': '固体',
    'AgCl': '固体', 'AgBr': '固体', 'AgI': '固体', 'AuCl3': '固体', 'NaNO3': '固体', 'Ce(NO3)3': '固体', 'KIO4': '固体',
    'KNO3': '固体', 'Ca(NO3)2': '固体', 'Mg(NO3)2': '固体', 'Fe(NO3)3': '固体', 'Cu(NO3)2': '固体', 'KIO3': '固体',
    '(NH4)2CO3': '固体', 'NaHCO3': '固体', 'KHCO3': '固体', 'HgI2': '固体',
    'Al2(SO4)3': '固体', 'UF4': '固体', 'ThF4': '固体', 'ThO2': '固体', 'RaSO4': '固体', 'KBrO3': '固体', 
    'H2SO4': '液体', 'HNO3': '液体', 'H3PO4': '液体', 'HClO4': '液体', 'CH3COOH': '液体', 'CsClO4': '固体', 
    'Na2S2O3': '固体', 'K2Cr2O7': '固体', 'K2CrO4': '固体', 'KMnO4': '固体', 'NH4HCO3': '固体', 'NaCr2O7': '固体',
    'NH4Cl': '固体', 'NH4NO3': '固体', 'Na3PO4': '固体', 'K3PO4': '固体', 'CsNO3': '固体', 'CuC2O4': '固体',
    'Ca3(PO4)2': '固体', 'Mg3(PO4)2': '固体', 'FePO4': '固体', 'AlPO4': '固体', 'Zn3(PO4)2': '固体', 'Ba(NO3)2': '固体',
    'AgNO3': '固体', 'BaSO4': '固体', 'PbSO4': '固体', 'HgCl2': '固体', 'SnCl2': '固体', 'ScCl3': '固体',
    'SnCl4': '液体', 'TiCl4': '液体', 'CrCl3': '固体', 'MnCl2': '固体', 'CoCl2': '固体', 'V2O5': '固体', 'C5H5N': '固体',
    'NiCl2': '固体', 'CuCl2': '固体', 'ZnCl2': '固体', 'CdCl2': '固体', 'Hg2Cl2': '固体', 'La(NO3)3': '固体',
    'PbCl2': '固体', 'BiCl3': '固体', 'SbCl3': '液体', 'AsCl3': '液体', 'PCl3': '液体', 'Rbcl': '固体', 'H2O2': '固体',
    'PCl5': '固体', 'SF6': '气体', 'XeF4': '固体', 'Na2He': '固体', 'NaH': '固体', 'Cscl': '固体', 'Sr(NO3)2': '固体',
    'BF3': '气体', 'BCl3': '液体', 'AlCl3': '固体', 'GaCl3': '固体', 'InCl3': '固体', 'HAuCl4': '固体', 'P2O5': '固体',
    'TlCl': '固体', 'GeCl4': '液体', 'SnF2': '固体', 'PbF2': '固体', 'AsF5': '气体', 'Th(C2O4)2': '固体', 
    'SbF5': '液体', 'BiF3': '固体', 'SeF6': '气体', 'TeF6': '气体', 'IF5': '液体', 'ICl': '液体', 'Al2(NO3)3': '固体',
    'IF7': '气体', 'C2H5NH2': '气体', 'CH3NH2': '气体', 'C3H5N': '液体', 'C4H9OH': '液体', 'Nd2(SO4)3': '固体',
    'C2H5CHO': '液体', 'H2C2O4': '固体', 'FeC2O4': '固体', 'Na2C2O4': '固体', 'K2C2O4': '固体', 'Pr2(SO4)3': '固体',
    'CH3COCH3': '液体', 'C2H5COOH': '液体', 'C3H7COOH': '液体', 'C6H5OH': '固体', 'CaC2O4': '固体', 'Zn(NO3)2': '固体',
    'C6H5NH2': '液体', 'C6H5NO2': '液体', 'C6H5Cl': '液体', 'C6H5Br': '液体', 'C6H5I': '液体', 
    'C2H5OCH3': '液体', 'CH3COOCH3': '液体', 'CH3COOC2H5': '液体', 'C2H5SH': '液体', 'SmCl3': '固体', 'Hg(NO3)2': '固体',
    'CH3SCH3': '气体', 'C2H5SC2H5': '液体', 'Na2SiO3': '固体', 'K2SiO3': '固体', 'CaSiO3': '固体', 'Ni(NO3)2': '固体',
    'MgSiO3': '固体', 'FeSiO3': '固体', 'Al2SiO5': '固体', 'NaAlO2': '固体', 'KAlO2': '固体', 'K2S2O8': '固体',
    'Ca(ClO)2': '固体', 'NaClO': '固体', 'NaClO3': '固体', 'KClO3': '固体', 'KClO3': '固体', 'Na2S2O7': '固体',
    'Cd(NO3)2': '固体', 'Pb(NO3)2': '固体', 'Bi(NO3)3': '固体', 'Th(NO3)4': '固体', 'Sm(NO3)6': '固体','PbO2': '固体',
    'NaNO2': '固体', 'Ba(NO3)2': '固体', 'Na2WO4': '固体', 'HgO': '固体', 'CrO3': '固体', 'MnO2': '固体', 'Cu2O': '固体',
    '(CH3)3COH': '液体', '(CH3)2CHOH': '液体', 'CO(NH2)2': '固体', 'C6H12O6': '固体',
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
    // 重置游戏状体
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

// 将答案填入游戏板并显示状体和分子量
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

    // 显示状体和分子量
    const hintDiv = document.getElementById('hint');
    let hintText = `答案: ${answer}<br>`;
    hintText += `常温状态: <span class="state-correct">${answerState}</span><br>`;
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

            // 显示答案状体和分子量
            const hintDiv = document.getElementById('hint');
            let hintText = `答案: ${answer}<br>`;
            hintText += `常温状态: <span class="state-correct">${answerState}</span><br>`;
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
    else if (guessCount >= 20) {
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

    // 状体
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

// 解析化学式为字符数组（保留括号和下标）
function parseFormula(formula) {
    const chars = [];
    let i = 0;
    while (i < formula.length) {
        if (formula[i] === '(') {
            chars.push('(');
            i++;
        } else if (formula[i] === ')') {
            chars.push(')');
            i++;
        }
        else if (/[A-Z]/.test(formula[i])) {
            let element = formula[i];
            i++;
            if (i < formula.length && /[a-z]/.test(formula[i])) {
                element += formula[i];
                i++;
            }
            chars.push(element);
        } else if (/\d/.test(formula[i])) {
            let number = formula[i];
            i++;
            while (i < formula.length && /\d/.test(formula[i])) {
                number += formula[i];
                i++;
            }
            chars.push(number);
        } else {
            i++;
        }
    }
    return chars;
}

// 验证化学式有效性
function isValidFormula(formula) {
    if (!formula) return false;
    // 检查括号匹配
    let stack = 0;
    for (let char of formula) {
        if (char === '(') stack++;
        if (char === ')') stack--;
        if (stack < 0) return false;
    }
    if (stack !== 0) return false;
    // 检查字符有效性（字母、数字、括号）
    return /^[A-Za-z0-9()]+$/.test(formula);
}

// 计算分子量（支持括号）
function calculateMolecularWeight(formula) {
    if (!formula || !isValidFormula(formula)) return 0;

    let molecularWeight = 0;
    let stack = [1]; // 乘数栈，处理括号嵌套
    let i = 0;

    while (i < formula.length) {
        if (formula[i] === '(') {
            stack.push(stack[stack.length - 1]);
            i++;
        } else if (formula[i] === ')') {
            stack.pop();
            i++;
            // 检查括号后的下标
            let number = '';
            while (i < formula.length && /\d/.test(formula[i])) {
                number += formula[i];
                i++;
            }
            if (number) {
                const multiplier = parseInt(number);
                stack[stack.length - 1] *= multiplier;
            }
        } else if (/[A-Z]/.test(formula[i])) {
            let element = formula[i];
            i++;
            if (i < formula.length && /[a-z]/.test(formula[i])) {
                element += formula[i];
                i++;
            }
            let number = '';
            while (i < formula.length && /\d/.test(formula[i])) {
                number += formula[i];
                i++;
            }
            const count = parseInt(number) || 1;
            molecularWeight += (periodicTable[element]?.atomicMass || 0) * count * stack[stack.length - 1];
        } else {
            i++;
        }
    }

    return molecularWeight;

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

    // 状体提示
    const inputState = compoundStates[input] || '未知';
    const stateClass = inputState === answerState ? 'state-correct' : 'state-incorrect';
    hintText += `常温状态: <span class="${stateClass}">${inputState}</span><br>`;

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

    hintText += `<br>剩余猜测次数: ${20 - guessCount}`;
    hintDiv.innerHTML = hintText;
}

// 启动游戏
initGame();