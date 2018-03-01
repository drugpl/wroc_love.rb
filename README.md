Ruby Conference brought by thriving Wrocław Ruby Community

## Using on developer machine

Needs two commands to be running, one with the web server, one which continuously compile whatever you change:

```
bundle exec nanoc watch
bundle exec nanoc view
```

## Compiling

```
bundle exec nanoc compile
```

## Deploying

Nothing to do, changes in `master` branch are published automatically on `www.wrocloverb.com`.

Changes in branches get deployed separately under special preview URL.
