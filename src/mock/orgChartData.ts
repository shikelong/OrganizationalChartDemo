import chineseNameGenerator from "chinese-random-name";
import jpNameGenerator from "japanese-name-generator";

const nameGenerator = () => {
  // return jpNameGenerator().name;
  return chineseNameGenerator.generate();
};

export type Employee = {
  name: string;
  id: string;
  description?: string;
  avatar?: string;
  isLeader: boolean;
};

export type Bumon = {
  id: string;
  name: string;
  stuff?: Employee[];
  children?: Bumon[];
  //一行最多显示的人的数量
  rowCount?: number;
};

export const defaultAvatarImg =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAqRXhpZgAASUkqAAgAAAABADEBAgAHAAAAGgAAAAAAAABHb29nbGUAAP/bAIQAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFAEDBAQFBAUJBQUKFA0LDRQUEBAUFRQPFQ8VFBUQERIUEhQSERUNFRASFRAPFRUVEg0PFQ8VFBUQFRMNDRUTFREN/8AAEQgAIAAgAwERAAIRAQMRAf/EABoAAAICAwAAAAAAAAAAAAAAAAcIBgkDBAX/xAAwEAACAQMDAgQCCwEAAAAAAAABAgMEBREGBxIAIRMxUWEiQggJFBUyQXGBkdHwFv/EABoBAAMBAAMAAAAAAAAAAAAAAAQFBgIAAQP/xAAoEQACAQMDAgUFAAAAAAAAAAABAgADBBESIUEFMRNRcYHBIjJhsdH/2gAMAwEAAhEDEQA/AGo3k3Wte1GjajVFfAZ3p2WBKZSoeV3zxQFiPQk8c4AJwQD0ZUqeEuTIShRN5VCJsefSVd7w786g3Nv1TWXmvmkikYint6Pwp4gDgcYx2ABPHJyx8yT59JHqPVOWP8lxb2tK2XTTHvzBk+pEjqHVwWiVs8h54zgke+cHrGk4hkO+w30hrjoK8U1PXV1XcNN54SUYk5rEDgh4wfLHnxBAOT2z3BNC4eiwB+3yiHqXSqV6hZABU4PwfP17/omP6w7Vt3syWSyMIxZ3LVavGzF55RhMMSo/CHzxGR8QJOeykXbMSF4gPQ6CLrq5y3aIzbrNddW1sktFC0xiMYYgHAY54j9yD/PS8sqDeVyqW7TU03pyv1bUVENujaeSKnM/FRnI5KoA9yzj/Z60zhBvOIpfZZnsU01quxp5QyMcAo3r5qf0IOfcHrptxmYO0s9+sX2XuGvrJo+rtFMz1NNJWwvhSQwNO0wBx5HNOVX1Mnt0TcnChzxEXTV01GQc/EU3ZvSS0eg6UMstHPLLK1RE8CrKHyFZW5KT8gI9sdIa9TLyzt0+idKwbVUOmtSXW522penjrowr03BXEb8ubFSc4BOPh/Lvj5eOGrFlCtxPRaIRiy8yI682dvertwrd9wWtquX7veWZqaIjxWi5lUVBnLlQFUDucAdgB0XQqDTpPnArlMHVwBkyzGS1fSTkwXrtrXx3AaCv/rpofGIxtJPNuNxnPtFq1ts7rHaSiov+1e0zivq2pqC4WdpDDI3hmXwpuaqUkwkzBz8LhSpKuFEqi4tmpjWO0qLK/WufDPeQ6RkgAaV1RfI9jnPoAO5PsBk/l0vAzsI4JxuYYdm9qN4yaPXOiH0XRWq50K/YYNVx1n2vwyc+M0aIBEXx8K5JCEcsMxVXlG1anhtsyUu7+nXJpb6fxjef/9k=";
// "https://lh3.googleusercontent.com/ogw/ADea4I7Es9_kahiNXLSb2LQpcw_RfAqdFje34CFyt-wtDQ=s32-c-mo";

const generatorEmployees = (count: number = 5): Employee[] => {
  const employees: Employee[] = [];
  for (let i = 0; i < count; i++) {
    employees.push({
      name: nameGenerator(),
      id: Math.random().toFixed(4).toString(),
      // avatar: defaultAvatarImg,
      isLeader: i === 0,
    });
  }

  return employees;
};

export const datas: Bumon = {
  id: "d-1",
  name: "虚拟公司",
  rowCount: 2,
  stuff: [
    {
      name: nameGenerator(),
      id: "p-1",
      // avatar: defaultAvatarImg,
      isLeader: true,
    },
  ],
  children: [
    {
      name: "管理部",
      id: "d-2",
      stuff: generatorEmployees(5),
      children: [
        {
          name: "人力资源部",
          id: "d-3",
          stuff: generatorEmployees(10),
        },
        {
          name: "公关部",
          id: "d-4",
          stuff: generatorEmployees(5),
        },
      ],
    },
    {
      name: "技术部",
      id: "d-21",
      stuff: generatorEmployees(5),
      children: [
        {
          name: "平台研发部",
          id: "d-31",
          stuff: generatorEmployees(3),
        },
        {
          name: "业务研发部",
          id: "d-32",
          stuff: generatorEmployees(20),
          rowCount: 6,
          children: [
            {
              name: "智慧城市研发组",
              id: "d-321",
              stuff: generatorEmployees(30),
              children: [
                {
                  name: "交付和实施小组",
                  id: "d-3232",
                  stuff: generatorEmployees(3),
                },
                {
                  name: "前端研发组",
                  id: "d-3231",
                  stuff: generatorEmployees(5),
                  rowCount: 2,
                },
                {
                  name: "后端研发组",
                  id: "d-3233",
                  stuff: generatorEmployees(5),
                },
              ],
            },
            {
              name: "智慧交通研发组",
              id: "d-323",
              stuff: generatorEmployees(5),
            },
          ],
        },
      ],
    },
  ],
};
