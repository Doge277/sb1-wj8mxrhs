import { FlashcardType } from '../types/types';

// Данные для карточек с вопросами и ответами на двух языках
export const flashcardData: FlashcardType[] = [
  // Алгебра
  {
    id: 1,
    category: 'algebra',
    question: {
      en: 'What is the quadratic formula?',
      ru: 'Что такое квадратное уравнение?'
    },
    answer: {
      en: 'x = (-b ± √(b² - 4ac)) / 2a where ax² + bx + c = 0',
      ru: 'x = (-b ± √(b² - 4ac)) / 2a где ax² + bx + c = 0'
    }
  },
  {
    id: 2,
    category: 'algebra',
    question: {
      en: 'What does FOIL stand for in algebra?',
      ru: 'Что такое метод перемножения скобок (FOIL) в алгебре?'
    },
    answer: {
      en: 'First, Outer, Inner, Last - a method for multiplying two binomials',
      ru: 'Метод последовательного перемножения членов в скобках: Первый, Внешний, Внутренний, Последний - метод умножения двух двучленов'
    }
  },
  {
    id: 3,
    category: 'algebra',
    question: {
      en: 'What is the difference between an expression and an equation?',
      ru: 'В чем разница между выражением и уравнением?'
    },
    answer: {
      en: 'An expression is a mathematical phrase with numbers and operations (like 2x + 3). An equation states that two expressions are equal (like 2x + 3 = 7).',
      ru: 'Выражение - это математическая фраза с числами и операциями (например, 2x + 3). Уравнение утверждает, что два выражения равны (например, 2x + 3 = 7).'
    }
  },
  {
    id: 4,
    category: 'algebra',
    question: {
      en: 'What are the types of solutions for a system of linear equations?',
      ru: 'Какие существуют типы решений системы линейных уравнений?'
    },
    answer: {
      en: 'A system of linear equations can have: 1) One unique solution, 2) Infinitely many solutions, or 3) No solution',
      ru: 'Система линейных уравнений может иметь: 1) Единственное решение, 2) Бесконечно много решений, или 3) Не иметь решений'
    }
  },
  
  // Геометрия
  {
    id: 5,
    category: 'geometry',
    question: {
      en: 'What is the Pythagorean theorem?',
      ru: 'Что такое теорема Пифагора?'
    },
    answer: {
      en: 'In a right triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the other two sides: a² + b² = c²',
      ru: 'В прямоугольном треугольнике квадрат длины гипотенузы равен сумме квадратов длин двух других сторон: a² + b² = c²'
    }
  },
  {
    id: 6,
    category: 'geometry',
    question: {
      en: 'What is the formula for the area of a circle?',
      ru: 'Какова формула площади круга?'
    },
    answer: {
      en: 'A = πr², where r is the radius of the circle',
      ru: 'A = πr², где r - радиус круга'
    }
  },
  {
    id: 7,
    category: 'geometry',
    question: {
      en: 'What is the sum of the interior angles of a polygon with n sides?',
      ru: 'Чему равна сумма внутренних углов многоугольника с n сторонами?'
    },
    answer: {
      en: '(n - 2) × 180°',
      ru: '(n - 2) × 180°'
    }
  },
  {
    id: 8,
    category: 'geometry',
    question: {
      en: 'What are similar triangles?',
      ru: 'Что такое подобные треугольники?'
    },
    answer: {
      en: 'Similar triangles have the same shape but possibly different sizes. Their corresponding angles are equal, and their corresponding sides are proportional.',
      ru: 'Подобные треугольники имеют одинаковую форму, но могут быть разного размера. Их соответствующие углы равны, а соответствующие стороны пропорциональны.'
    }
  },
  
  // Математический анализ
  {
    id: 9,
    category: 'calculus',
    question: {
      en: 'What is the derivative of sin(x)?',
      ru: 'Чему равна производная sin(x)?'
    },
    answer: {
      en: 'cos(x)',
      ru: 'cos(x)'
    }
  },
  {
    id: 10,
    category: 'calculus',
    question: {
      en: 'What is the chain rule in calculus?',
      ru: 'Что такое правило цепочки в математическом анализе?'
    },
    answer: {
      en: 'If y = f(g(x)), then dy/dx = (df/dg) × (dg/dx)',
      ru: 'Если y = f(g(x)), то dy/dx = (df/dg) × (dg/dx)'
    }
  },
  {
    id: 11,
    category: 'calculus',
    question: {
      en: 'What is an inflection point?',
      ru: 'Что такое точка перегиба?'
    },
    answer: {
      en: 'An inflection point is where the curve changes concavity (from concave up to concave down, or vice versa). Mathematically, it\'s where the second derivative changes sign.',
      ru: 'Точка перегиба - это точка, где кривая меняет направление выпуклости (с выпуклой вверх на выпуклую вниз, или наоборот). Математически это точка, где вторая производная меняет знак.'
    }
  },
  {
    id: 12,
    category: 'calculus',
    question: {
      en: 'What does the fundamental theorem of calculus establish?',
      ru: 'Что устанавливает основная теорема математического анализа?'
    },
    answer: {
      en: 'It establishes the relationship between differentiation and integration as inverse operations, connecting the concept of the derivative to the concept of the integral.',
      ru: 'Она устанавливает связь между дифференцированием и интегрированием как обратными операциями, связывая понятие производной с понятием интеграла.'
    }
  },
  
  // Статистика
  {
    id: 13,
    category: 'statistics',
    question: {
      en: 'What is the difference between mean, median, and mode?',
      ru: 'В чем разница между средним значением, медианой и модой?'
    },
    answer: {
      en: 'Mean is the average of all values, median is the middle value when arranged in order, and mode is the most frequently occurring value.',
      ru: 'Среднее значение - это сумма всех значений, деленная на их количество; медиана - это среднее значение при упорядочении данных; мода - это наиболее часто встречающееся значение.'
    }
  },
  {
    id: 14,
    category: 'statistics',
    question: {
      en: 'What is standard deviation?',
      ru: 'Что такое стандартное отклонение?'
    },
    answer: {
      en: 'A measure of how spread out numbers are from their average (mean). It\'s calculated as the square root of variance.',
      ru: 'Мера того, насколько значения отклоняются от их среднего. Вычисляется как квадратный корень из дисперсии.'
    }
  },
  {
    id: 15,
    category: 'statistics',
    question: {
      en: 'What is a normal distribution?',
      ru: 'Что такое нормальное распределение?'
    },
    answer: {
      en: 'A bell-shaped probability distribution that is symmetric about the mean, showing that data near the mean are more frequent than data far from the mean.',
      ru: 'Колоколообразное распределение вероятностей, симметричное относительно среднего значения, показывающее, что данные близкие к среднему встречаются чаще, чем удаленные от него.'
    }
  },
  {
    id: 16,
    category: 'statistics',
    question: {
      en: 'What is the difference between correlation and causation?',
      ru: 'В чем разница между корреляцией и причинно-следственной связью?'
    },
    answer: {
      en: 'Correlation indicates a relationship between variables, but doesn\'t imply one causes the other. Causation specifically means that one variable directly affects the other.',
      ru: 'Корреляция указывает на связь между переменными, но не означает, что одна является причиной другой. Причинно-следственная связь конкретно означает, что одна переменная напрямую влияет на другую.'
    }
  }
];