# exec-on-changed

Node.js utility: execute command when file changed

```
exec-on-changed -d /path/to/watching/dir -f /path/to/exec/file
```


###### Table of Contents

- [Requirements](#Requirements)
- [Usage](#Usage)
- [License](#License)

<a id="Requirements"></a>
## Requirements

- development on Node 11.6.0


<a id="Usage"></a>
## Usage

### CLI

```
exec-on-changed -d /path/to/watching/dir -f /path/to/exec
```

#### Args

1. watching directory path : specified with --dir (-d)
1. path to changed path

#### Example

- /path/to/exec

```bash
#!/bin/bash
echo "$@"
```

run `exec-on-changed`

```
$ exec-on-changed -d /path/to/watching/dir -f /path/to/exec
```

change any file in `/path/to/watching/dir`

```
$ touch /path/to/watching/dir/path/to/target
```

then, `exec-on-changed` process should display below.

```
/path/to/watching/dir path/to/target
```


### Install

```
npm install --save-dev exec-on-changed
```


<a id="License"></a>
## License

exec-on-changed is licensed under the [MIT](LICENSE) license.

Copyright &copy; since 2018 shun@getto.systems
