// Данные об университетах
const universitiesData = {
  kaznu: {
    name: "КазНУ им. аль-Фараби",
    city: "Алматы",
    logo: "https://farabi.university/front/assets/img/icons/logonew1.png",
    rating: 4.8,
    criteria: {
      reputation: "Высокая (старейший вуз страны)",
      cost: "от 600,000 тг/год",
      programs: "Более 200 образовательных программ",
      dormitory: "Есть, от 30,000 тг/мес",
      accreditation: "Государственная, международная",
      employment: "85% выпускников",
      research: "Высокий уровень, много научных проектов",
      international: "Партнерства с 500+ вузами мира",
    },
  },
  nu: {
    name: "Назарбаев Университет",
    city: "Нур-Султан",
    logo: "https://static.tildacdn.pro/tild3731-3534-4564-a433-363633326465/noroot.png",
    rating: 4.9,
    criteria: {
      reputation: "Очень высокая (ведущий исследовательский вуз)",
      cost: "Конкурсный отбор, часто с грантом",
      programs: "Современные программы на английском",
      dormitory: "Есть, современные кампусы",
      accreditation: "Международная (зарубежные партнеры)",
      employment: "92% выпускников",
      research: "Очень высокий, передовые лаборатории",
      international: "Сильная интеграция, зарубежные преподаватели",
    },
  },
  kazntu: {
    name: "КазНТУ им. Сатпаева",
    city: "Алматы",
    logo: "https://official.satbayev.university/files/img/official/main/Frame%2018.png",
    rating: 4.5,
    criteria: {
      reputation: "Высокая (лучший технический вуз)",
      cost: "от 550,000 тг/год",
      programs: "Технические и инженерные специальности",
      dormitory: "Есть, от 25,000 тг/мес",
      accreditation: "Государственная, отраслевая",
      employment: "88% выпускников",
      research: "Прикладные исследования, инновации",
      international: "Партнерства с техническими вузами",
    },
  },
  enu: {
    name: "ЕНУ им. Гумилева",
    city: "Нур-Султан",
    logo: "https://enu.kz/_nuxt/logo.0ywpaMup.svg",
    rating: 4.4,
    criteria: {
      reputation: "Высокая (крупный научно-образовательный центр)",
      cost: "от 500,000 тг/год",
      programs: "Широкий спектр гуманитарных и естественных наук",
      dormitory: "Есть, от 28,000 тг/мес",
      accreditation: "Государственная",
      employment: "82% выпускников",
      research: "Научные школы, публикации",
      international: "Активное международное сотрудничество",
    },
  },
  kau: {
    name: "КазАТУ им. Сейфуллина",
    city: "Нур-Султан",
    logo: "https://kazatu.edu.kz/img/logo_official.svg",
    rating: 4.2,
    criteria: {
      reputation: "Высокая (ведущий аграрный вуз)",
      cost: "от 450,000 тг/год",
      programs: "Аграрные, технические, экономические",
      dormitory: "Есть, от 20,000 тг/мес",
      accreditation: "Государственная, отраслевая",
      employment: "80% выпускников",
      research: "Прикладные аграрные исследования",
      international: "Сотрудничество с аграрными вузами",
    },
  },
  kaznuir: {
    name: "КазНУИ",
    city: "Астана",
    logo: "https://kaznui.kz/img/logo.png",
    rating: 4.3,
    criteria: {
      reputation: "Высокая (ведущий вуз искусств)",
      cost: "от 700,000 тг/год",
      programs: "Искусство, музыка, театр, хореография",
      dormitory: "Есть, от 35,000 тг/мес",
      accreditation: "Государственная",
      employment: "78% выпускников",
      research: "Творческие проекты, выставки",
      international: "Участие в международных конкурсах",
    },
  },
};

// Критерии для сравнения
const criteria = [
  { id: "reputation", name: "Репутация и престиж", icon: "fas fa-award" },
  {
    id: "cost",
    name: "Стоимость обучения",
    icon: "fas fa-money-bill-wave",
  },
  {
    id: "programs",
    name: "Образовательные программы",
    icon: "fas fa-graduation-cap",
  },
  { id: "dormitory", name: "Общежитие", icon: "fas fa-home" },
  {
    id: "accreditation",
    name: "Аккредитация",
    icon: "fas fa-file-certificate",
  },
  {
    id: "employment",
    name: "Трудоустройство выпускников",
    icon: "fas fa-briefcase",
  },
  {
    id: "research",
    name: "Научно-исследовательская деятельность",
    icon: "fas fa-flask",
  },
  {
    id: "international",
    name: "Международное сотрудничество",
    icon: "fas fa-globe-asia",
  },
];

// Элементы DOM
const uniSelect1 = document.getElementById("uni1");
const uniSelect2 = document.getElementById("uni2");
const uniSelect3 = document.getElementById("uni3");
const compareBtn = document.getElementById("compareBtn");
const resetBtn = document.getElementById("resetBtn");
const comparisonBody = document.getElementById("comparisonBody");
const resultsContent = document.getElementById("resultsContent");
const uniHeader1 = document.getElementById("uniHeader1");
const uniHeader2 = document.getElementById("uniHeader2");
const uniHeader3 = document.getElementById("uniHeader3");

// Функция для отображения сравнения
function renderComparison() {
  const selectedUnis = [
    uniSelect1.value,
    uniSelect2.value,
    uniSelect3.value,
  ].filter((value) => value !== "");

  // Очистка таблицы
  comparisonBody.innerHTML = "";
  resultsContent.innerHTML = "";

  // Если не выбрано ни одного университета
  if (selectedUnis.length === 0) {
    comparisonBody.innerHTML =
      '<tr><td colspan="4" class="no-data" style="text-align: center; padding: 40px;">Выберите университеты для сравнения</td></tr>';
    resultsContent.innerHTML =
      '<p class="no-data">Выберите университеты для сравнения, чтобы увидеть результаты.</p>';
    return;
  }

  // Обновление заголовков таблицы
  updateTableHeaders(selectedUnis);

  // Добавление строк с критериями
  criteria.forEach((criterion) => {
    const row = document.createElement("tr");

    // Ячейка с названием критерия
    const criterionCell = document.createElement("td");
    criterionCell.className = "criteria-header";
    criterionCell.innerHTML = `<i class="${criterion.icon}"></i> ${criterion.name}`;
    row.appendChild(criterionCell);

    // Ячейки с данными для каждого университета
    selectedUnis.forEach((uniId) => {
      const uniCell = document.createElement("td");
      const uniData = universitiesData[uniId];

      if (uniData && uniData.criteria[criterion.id]) {
        uniCell.textContent = uniData.criteria[criterion.id];
      } else {
        uniCell.innerHTML = '<span class="no-data">Нет данных</span>';
      }

      row.appendChild(uniCell);
    });

    // Добавление пустых ячеек, если выбрано меньше 3 университетов
    for (let i = selectedUnis.length; i < 3; i++) {
      const emptyCell = document.createElement("td");
      emptyCell.innerHTML = '<span class="no-data">Не выбран</span>';
      row.appendChild(emptyCell);
    }

    comparisonBody.appendChild(row);
  });

  // Генерация результатов сравнения
  generateComparisonResults(selectedUnis);
}

// Обновление заголовков таблицы
function updateTableHeaders(selectedUnis) {
  const headers = [uniHeader1, uniHeader2, uniHeader3];

  headers.forEach((header, index) => {
    if (index < selectedUnis.length) {
      const uniId = selectedUnis[index];
      const uniData = universitiesData[uniId];

      header.innerHTML = `
                        <div class="university-header">
                            <img src="${uniData.logo}" alt="${uniData.name}" class="university-logo">
                            <div>
                                <div class="university-name">${uniData.name}</div>
                                <div class="university-city">${uniData.city}</div>
                                <div class="rating-badge">Рейтинг: ${uniData.rating}/5.0</div>
                            </div>
                        </div>
                    `;
    } else {
      header.innerHTML = "Университет не выбран";
    }
  });
}

// Генерация результатов сравнения
function generateComparisonResults(selectedUnis) {
  if (selectedUnis.length < 2) {
    resultsContent.innerHTML =
      '<p class="no-data">Выберите хотя бы 2 университета для сравнения.</p>';
    return;
  }

  resultsContent.innerHTML = "";

  // Сравнение по стоимости
  const costResults = compareByCost(selectedUnis);
  if (costResults) {
    const costCard = document.createElement("div");
    costCard.className = "result-card";
    costCard.innerHTML = `
                    <h3 class="result-title"><i class="fas fa-money-bill-wave"></i> Стоимость обучения</h3>
                    <p>${costResults.text}</p>
                    <div class="result-winner"><i class="fas fa-trophy"></i> ${costResults.winner}</div>
                `;
    resultsContent.appendChild(costCard);
  }

  // Сравнение по рейтингу
  const ratingResults = compareByRating(selectedUnis);
  if (ratingResults) {
    const ratingCard = document.createElement("div");
    ratingCard.className = "result-card";
    ratingCard.innerHTML = `
                    <h3 class="result-title"><i class="fas fa-star"></i> Рейтинг университета</h3>
                    <p>${ratingResults.text}</p>
                    <div class="result-winner"><i class="fas fa-trophy"></i> ${ratingResults.winner}</div>
                `;
    resultsContent.appendChild(ratingCard);
  }

  // Сравнение по трудоустройству
  const employmentResults = compareByEmployment(selectedUnis);
  if (employmentResults) {
    const employmentCard = document.createElement("div");
    employmentCard.className = "result-card";
    employmentCard.innerHTML = `
                    <h3 class="result-title"><i class="fas fa-briefcase"></i> Трудоустройство выпускников</h3>
                    <p>${employmentResults.text}</p>
                    <div class="result-winner"><i class="fas fa-trophy"></i> ${employmentResults.winner}</div>
                `;
    resultsContent.appendChild(employmentCard);
  }

  // Рекомендация
  const recommendation = generateRecommendation(selectedUnis);
  const recommendationCard = document.createElement("div");
  recommendationCard.className = "result-card";
  recommendationCard.style.borderLeftColor = "#27ae60";
  recommendationCard.innerHTML = `
                <h3 class="result-title"><i class="fas fa-lightbulb"></i> Наша рекомендация</h3>
                <p>${recommendation.text}</p>
                <div class="result-winner">${recommendation.winner}</div>
            `;
  resultsContent.appendChild(recommendationCard);
}

// Функции сравнения по разным критериям
function compareByCost(selectedUnis) {
  const costs = selectedUnis.map((id) => {
    const costStr = universitiesData[id].criteria.cost;
    const match = costStr.match(/(\d+)/);
    return match ? parseInt(match[1]) : Infinity;
  });

  const minCost = Math.min(...costs);
  const minIndex = costs.indexOf(minCost);
  const winnerUni = universitiesData[selectedUnis[minIndex]].name;

  return {
    winner: `Лучшая стоимость: ${winnerUni}`,
    text: `Наименьшая стоимость обучения среди выбранных университетов.`,
  };
}

function compareByRating(selectedUnis) {
  const ratings = selectedUnis.map((id) => universitiesData[id].rating);
  const maxRating = Math.max(...ratings);
  const maxIndex = ratings.indexOf(maxRating);
  const winnerUni = universitiesData[selectedUnis[maxIndex]].name;

  return {
    winner: `Лучший рейтинг: ${winnerUni}`,
    text: `Наивысший рейтинг среди выбранных университетов.`,
  };
}

function compareByEmployment(selectedUnis) {
  const employments = selectedUnis.map((id) => {
    const empStr = universitiesData[id].criteria.employment;
    const match = empStr.match(/(\d+)%/);
    return match ? parseInt(match[1]) : 0;
  });

  const maxEmployment = Math.max(...employments);
  const maxIndex = employments.indexOf(maxEmployment);
  const winnerUni = universitiesData[selectedUnis[maxIndex]].name;

  return {
    winner: `Лучшее трудоустройство: ${winnerUni}`,
    text: `Наивысший процент трудоустройства выпускников.`,
  };
}

function generateRecommendation(selectedUnis) {
  if (selectedUnis.length === 0) return { winner: "", text: "" };

  // Простой алгоритм рекомендации на основе рейтинга
  let bestUni = selectedUnis[0];
  let bestRating = universitiesData[bestUni].rating;

  selectedUnis.forEach((uniId) => {
    if (universitiesData[uniId].rating > bestRating) {
      bestRating = universitiesData[uniId].rating;
      bestUni = uniId;
    }
  });

  const bestUniName = universitiesData[bestUni].name;

  return {
    winner: `Рекомендуем: ${bestUniName}`,
    text: `На основе анализа ключевых критериев, этот университет показал наилучшие результаты среди выбранных вариантов.`,
  };
}

// Обработчики событий
compareBtn.addEventListener("click", renderComparison);

resetBtn.addEventListener("click", function () {
  uniSelect1.value = "";
  uniSelect2.value = "";
  uniSelect3.value = "";
  renderComparison();
});

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  // Можно предзаполнить выбранные университеты, если нужно
  // Например, из параметров URL
  renderComparison();
});

// Автоматическое обновление при изменении выбора
[uniSelect1, uniSelect2, uniSelect3].forEach((select) => {
  select.addEventListener("change", renderComparison);
});
