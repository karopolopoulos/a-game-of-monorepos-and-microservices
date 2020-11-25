#!/usr/bin/env bash

set -e
set -u
set -o pipefail

__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
templates_folder="${__dir}/../templates"
template="typescript"
init_path="services"
service_name=""

get_input() {
    read -p "Service name: " service_name
    read -p "Path: " init_path
    read -p "Template: " template
}

copy_template() {
    echo "copying template '$template' to '$init_path/$service_name'..."
    mkdir -p ${__dir}/../../$init_path/$service_name && cp -a $templates_folder/$template/ ${__dir}/../../$init_path/$service_name
}

get_input
copy_template
