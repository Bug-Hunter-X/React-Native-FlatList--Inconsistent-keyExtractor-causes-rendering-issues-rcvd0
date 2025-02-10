# React Native FlatList: Inconsistent keyExtractor causes rendering issues

This repository demonstrates a common bug in React Native's FlatList component: inconsistencies or omissions in the `keyExtractor` prop when handling large datasets. This leads to various issues, including incorrect rendering, performance problems, and visual glitches like duplicated or disappearing items.

## Bug Description
The `keyExtractor` prop is vital for FlatList to efficiently identify and update individual items.  A poorly implemented or absent `keyExtractor` confuses FlatList, resulting in unexpected rendering behavior and potentially impacting performance.

## Reproduction Steps
1. Clone the repository.
2. Run `npm install` or `yarn install`.
3. Run the app on an emulator or device.
4. Observe the inconsistent rendering and performance issues as you scroll through the list.

## Solution
Ensure a unique and consistent `keyExtractor` is implemented to provide each item with a distinct identifier. This will guarantee proper rendering and performance of the FlatList.