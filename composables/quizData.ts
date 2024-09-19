// クイズのデータ

export type QuizData = {
    question: string;
    options: string[];
    correctIndex: number;
    description: string;
  };
  
export const easyQuizData: QuizData[] = [
    {question: "初級問題0",
    options: ["初級選択肢0-0", "初級選択肢0-1", "初級選択肢0-2", "初級選択肢0-3"],
    correctIndex: 0,
    description: "初級解説0",
  },
    {question: "初級問題1",
      options: ["初級選択肢1-0", "初級選択肢1-1", "初級選択肢1-2", "初級選択肢1-3"],
      correctIndex: 1,
      description: "初級解説1",
  },
    {question: "初級問題2",
    options: ["初級選択肢2-0", "初級選択肢2-1", "初級選択肢2-2", "初級選択肢2-3"],
    correctIndex: 2,
    description: "初級解説2",
  },
    {question: "初級問題3",
      options: ["初級選択肢3-0", "初級選択肢3-1", "初級選択肢3-2", "初級選択肢3-3"],
      correctIndex: 3,
      description: "初級解説3",
  },
  {question: "初級問題4",
  options: ["初級選択肢4-0", "初級選択肢4-1", "初級選択肢4-2", "初級選択肢4-3"],
  correctIndex: 0,
  description: "初級解説4",
  },
    {question: "初級問題5",
      options: ["初級選択肢5-0", "初級選択肢5-1", "初級選択肢5-2", "初級選択肢5-3"],
      correctIndex: 1,
      description: "初級解説5",
  },
    {question: "初級問題6",
    options: ["初級選択肢6-0", "初級選択肢6-1", "初級選択肢6-2", "初級選択肢6-3"],
    correctIndex: 2,
    description: "初級解説6",
  },
    {question: "初級問題7",
    options: ["初級選択肢7-0", "初級選択肢7-1", "初級選択肢7-2", "初級選択肢7-3"],
    correctIndex: 3,
    description: "初級解説7",
  },
    {question: "初級問題8",
    options: ["初級選択肢8-0", "初級選択肢8-1", "初級選択肢8-2", "初級選択肢8-3"],
    correctIndex: 0,
    description: "初級解説8",
  },
    {question: "初級問題9",
      options: ["初級選択肢9-0", "初級選択肢9-1", "初級選択肢9-2", "初級選択肢9-3"],
      correctIndex: 1,
      description: "初級解説9",
  },
    {question: "初級問題10",
    options: ["初級選択肢10-0", "初級選択肢10-1", "初級選択肢10-2", "初級選択肢10-3"],
    correctIndex: 2,
    description: "初級解説10",
  },
    {question: "初級問題11",
    options: ["初級選択肢11-0", "初級選択肢11-1", "初級選択肢11-2", "初級選択肢11-3"],
    correctIndex: 3,
    description: "初級解説11",
  },
];

export const mediumQuizData: QuizData[] = [
    {question: "中級問題0",
      options: ["中級選択肢0-0", "中級選択肢0-1", "中級選択肢0-2", "中級選択肢0-3"],
      correctIndex: 1,
      description: "中級解説0",
  }];

  export const difficultQuizData: QuizData[] = [
    {question: "上級問題0",
      options: ["上級選択肢0-0", "上級選択肢0-1", "上級選択肢0-2", "上級選択肢0-3"],
      correctIndex: 1,
      description: "上級解説0",
  }];

  export const quizData = [easyQuizData, mediumQuizData, difficultQuizData]