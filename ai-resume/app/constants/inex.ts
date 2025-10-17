export const resumes: Resume[] = [
  {
    id: "1",
    companyName: "谷歌",
    jobTitle: "前端开发工程师",
    imagePath: "/images/resume_01.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 85,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "2",
    companyName: "微软",
    jobTitle: "云计算工程师",
    imagePath: "/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 55,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "3",
    companyName: "苹果",
    jobTitle: "iOS 开发工程师",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "4",
    companyName: "阿里巴巴",
    jobTitle: "后端开发工程师",
    imagePath: "/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 85,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "5",
    companyName: "字节跳动",
    jobTitle: "前端开发工程师",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 55,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "3",
    companyName: "苹果亚马逊",
    jobTitle: "iOS 开发工程师",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
];

export const AIResponseFormat = `
      interface 反馈 {
      整体评分: number; //最高 100
      ATS: {
        评分: number; //根据 ATS 兼容性评分
        建议: {
          类型: "优点" | "改进";
          建议: string; //给出 3-4 条建议
        }[];
      };
      语气和风格: {
        评分: number; //最高 100
        建议: {
          类型: "优点" | "改进";
          建议: string; //简短的"标题"
          详细说明: string; //详细解释
        }[]; //给出 3-4 条建议
      };
      内容: {
        评分: number; //最高 100
        建议: {
          类型: "优点" | "改进";
          建议: string; //简短的"标题"
          详细说明: string; //详细解释
        }[]; //给出 3-4 条建议
      };
      结构: {
        评分: number; //最高 100
        建议: {
          类型: "优点" | "改进";
          建议: string; //简短的"标题"
          详细说明: string; //详细解释
        }[]; //给出 3-4 条建议
      };
      技能: {
        评分: number; //最高 100
        建议: {
          类型: "优点" | "改进";
          建议: string; //简短的"标题"
          详细说明: string; //详细解释
        }[]; //给出 3-4 条建议
      };
    }`;

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
  AIResponseFormat,
}: {
  jobTitle: string;
  jobDescription: string;
  AIResponseFormat: string;
}) =>
  `你是一位 ATS（应聘者追踪系统）和简历分析的专家。
  请分析和评分这份简历，并建议如何改进。
  如果简历较差，评分可以很低。
  要全面和详细。不要害怕指出任何错误或需要改进的地方。
  如果有很多需要改进的地方，不要犹豫给低分。这是为了帮助用户改进简历。
  如果有招聘信息，请使用职位描述来提供更详细的反馈。
  职位名称是：${jobTitle}
  职位描述是：${jobDescription}
  请使用以下格式提供反馈：${AIResponseFormat}
  以 JSON 对象形式返回分析结果，不要包含任何其他文本和反引号。
  不要包含任何其他文本或注释。`;
