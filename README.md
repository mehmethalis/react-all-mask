# react-all-mask

An input masking package for React developers is a tool or library that helps control and format user input in input fields. It's particularly useful when you want to enforce a specific pattern or structure for the data being entered, such as phone numbers, dates, credit card numbers, or other custom formats.

## Installation

Use the package manager [pnpm / yarn / npm](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pnpm install react-all-mask
```

## Usage

```ts
import * as React from 'react'
import { useReactAllMask, Mask } from 'react-all-mask'

export default function App() {
  const [ref] = useReactAllMask<HTMLInputElement>({ mask: Mask.number })
  return (
    <div>
      <input placeholder="Type..." id="inputEl" ref={ref} />
    </div>
  )
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Playground

```ts
$ pnpm dev
```

<img src="https://thumbs2.imgbox.com/8e/22/H3S8pcFT_t.png" alt="image host" width="400"/>

## License

[MIT](https://choosealicense.com/licenses/mit/)
