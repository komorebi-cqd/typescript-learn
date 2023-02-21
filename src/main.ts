//Utility Types


interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}


const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {
        ...assign,
        ...propsToUpdate
    }
}

const assign1:Assignment = {
    studentId: 'CJSLKD',
    title: 'final project',
    grade: 0,
}

console.log(updateAssignment(assign1,{grade: 951}));


const assignGraded: Assignment = updateAssignment(assign1,{grade: 951});

// Required and Readonly 必传和只读 

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign
};

const assignVerified: Readonly<Assignment> = {...assign1,verified: true}

recordAssignment({...assignGraded, verified: true}); 

interface Info {
    name: string,
    age: number,
    height?: string
}
const getInfoObj = (info:Info): Readonly<Info> => {
    return {...info}
}

const res = getInfoObj({name: '产生的',age: 55})

// Record

const hexColorMap: Record<string,string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
}


type Students = 'Sara' | 'Kelly'
type LetterGrades = 'A' | 'B' | 'C' | 'D' |'E'

const finalGrades: Record<Students, LetterGrades> = {
    Sara: 'A',
    Kelly:'B'
}

//Pick and Omit

type AssignResult = Pick<Assignment, "grade" | "studentId">;

const score:AssignResult = {
    studentId: '222',
    grade: 22,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
    studentId:'sdfsdf',
    title: 'sdfasdf'
}
 

//Exclude and Extract 排除和包含某些值

type AdjustedGrade = Exclude<LetterGrades, 'A'>;

type HighGrades = Extract<LetterGrades, 'A' | 'B'>

const highGrades: HighGrades= 'A';

//Nonnullable 不能为空

type AllPossibleGrades = 'Dave' | 'John' | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

const namesOnly:NamesOnly = 'Dave'

// ReturnType 

// type newAssign = {title: string, points: number};

const createNewAssign = (title: string,points: number) => {
    return {title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign('Utility', 100);

//Parameters

type AssignParams = Parameters<typeof createNewAssign>;

// AssignParams = ['sdfsf',22]


//Awaited -helps us with the ReturnType of a Promise