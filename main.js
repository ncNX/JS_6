// const arr = [1,2,3,4,5,6]

// const arr1 = arr.filter((item, index, array) => {
// 	return item % 2 === 0;
// })

// const arr1 = arr.filter((item) => {
// 	return item > 2;})


// const arr1 = arr.filter((item, index) => {
// 	return index % 2 > 0 ;})



// const arr = [1,2,3,4,5,6]
// const arr1 = [1,2,3,4,5,6]

// console.log(arr.concat(arr1))

// arr.push(7) // modifica array initial 
// arr.pop()

// console.log(arr)

// const arr1 = [1,2,3,4,5,6]

// arr1.forEach((item, index, arr) => {
// 	console.log(item, index)
// })




// const arr = [1,2,3,4,5,6]

// const deleteLast = (list, num) => {
// 	if(num >= list.lenght) return list
// 	const result = [...list]

// 	for( let i = 1; i <= num ; i++){
// 		result.pop()
// 	}

// 	return result
// }

// console.log(deleteLast(arr, 2))
// console.log(arr)

// const restFunc = (arg1, arg2, arg3, ...rest) => {
// 	console.log(rest)
// }

// restFunc(1,2,3,4,5,6,7,8,9) // incepe cu rest pana nu sunt arg1 ,arg2 ......

// const obj = {
// 	name: 'Alex',
// 	age: 32,
// 	location: {
// 		city: 'Chisinau'
// 	}
// }

// const name = obj.name
// const age = obj.age
// const location = obj.location

// const {name, age, location} = {...obj}  // prescurtat cum am scris cheile de mai sus.

// const arr = [1,2,3,4,5,6,7]

// const [first,, third] = [...arr] // + virgula trece la urmatoare valoare
// console.log(first,third)

// const arr = [1,2,3,4,5,6]


// const result = arr.some((item, index, arr) => { 
// 	return item === 3
// } )

// const result = arr.every((item, index, arr) => {
// 	return typeof item === 'number'
// } )

// console.log(result)  