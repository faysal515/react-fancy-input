# react-fancy-input

### Inspiration
![Demo](https://i.stack.imgur.com/Aieip.gif)

## props
Accepts any props passed from parent component

| Prop Name | type | default |
| ------ | ------ | ------ |
| texts | array(string) | null |
| delay | number(in millisecond) | 200 |
| cursor | string | &#124; |

## Usage
```jsx harmony
import Input from 'react-fancy-input'

const placeholders = ['Search for book', 'Search by author', 'Search by publisher']

/* ... */

<Input texts={placeholders}/>
```
