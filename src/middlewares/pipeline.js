import yaml from 'js-yaml'
import { join } from 'path'

const cwd = process.cwd()

export default function pipeline(file) {
  if (!file) {
    file = join(cwd, 'conf/pipeline.yml')
  }

  console.log(file)
}
