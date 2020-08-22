import { parseISO, formatISO } from 'date-fns'

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{formatISO(date, 'LLLL d, yyyy', {representation: 'date'})}</time>
}