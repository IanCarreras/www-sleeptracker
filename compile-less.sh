#!/bin/bash
for filename in css/*.less; do
    lessc $filename css/$(basename "$filename" .less).css
done