type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]] : P
}


const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type r = TupleToObject<typeof tuple>
type r1 = TupleToObject<typeof tupleNumber>
type r2 = TupleToObject<typeof tupleMix>
