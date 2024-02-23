# ⬆️📈 CitybookServicesLTD status Monitor

This repository contains CitybookServicesLTD's GitHub Action's source code.

[**To get started, visit CitybookServicesLTD/status →**](https://github.com/CitybookServicesLTD/status)

[![Build CI](https://github.com/CitybookServicesLTD/status-monitor/workflows/Build%20CI/badge.svg)](https://github.com/CitybookServicesLTD/status-monitor/actions?query=workflow%3A%22Build+CI%22)
[![Release CI](https://github.com/CitybookServicesLTD/status-monitor/workflows/Release%20CI/badge.svg)](https://github.com/CitybookServicesLTD/status-monitor/actions?query=workflow%3A%22Release+CI%22)

## 🎁 Contributing

This repository is for CitybookServicesLTD's GitHub Action. We love contributions, so please read our [Contributing Guidelines](https://github.com/CitybookServicesLTD/.github/blob/main/CONTRIBUTING.md) and [Code of Conduct](https://github.com/CitybookServicesLTD/.github/blob/main/CODE_OF_CONDUCT.md) and open an issue or make a pull request!

### Issues

We use the [CitybookServicesLTD/status](https://github.com/CitybookServicesLTD/status) repository for issues for all projects, including this one. If you found a bug or have a feature request, [open an issue](https://github.com/CitybookServicesLTD/status/issues) in the CitybookServicesLTD repository and add the label "action".

## 💻 Usage

When you use CitybookServicesLTD, we automatically add the required workflows. If you want to manually use this package, you can use `npx`:

Generate the `README.md` summary file:

```bash
npx @CitybookServicesLTD/status-monitor summary
```

Make network requests to get the response time and commit them to git history:

```bash
npx @CitybookServicesLTD/status-monitor response-time
```

Generate the static status website, powered by [CitybookServicesLTD/status-page](https://github.com/CitybookServicesLTD/status-page):

```bash
npx @CitybookServicesLTD/status-monitor site
```

Generate response time graphs, powered by [CitybookServicesLTD/graphs](https://github.com/CitybookServicesLTD/graphs):

```bash
npx @CitybookServicesLTD/status-monitor graphs
```

Check status, but don't make git commits with network requests:

```bash
npx @CitybookServicesLTD/status-monitor
```

## 📄 License

[MIT](./LICENSE) © [Anand Chowdhary](https://anandchowdhary.com), supported by [Pabio](https://pabio.com)
