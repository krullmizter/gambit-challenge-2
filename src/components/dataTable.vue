<template>
  <div>
    <v-card-title>
        Modbus Register
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      v-model="search"
      :headers="headers"
      :items="register"
      :items-per-page="5"
      class="elevation-1"
      :search="search"
    ></v-data-table>
  </div>
</template>

<static-query>
query {
  registers: allRegisters(sortBy: "id", order: ASC) {
      edges {
        node {
        id
        register
        numbers
        var_name
        format
        note
      }
    }  
  }
}
</static-query> 

<script>

export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Register Data',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'ID', value: 'id' },
        { text: 'Register', value: 'register' },
        { text: 'Numbers', value: 'numbers' },
        { text: 'Variable Name', value: 'var_name' },
        { text: 'Format', value: 'format' },
        { text: 'Note', value: 'note'},
      ],
      register: [
	      {
	        "id": 1,
	        "register": "0001-0002",
	        "numbers": "2",
	        "var_name": "Flow Rate",
	        "format": "REAL4",
	        "note": "Unit: m3/h"
	      }, {
	        "id": 2,
	        "register": "0003-0004",
	        "numbers": "2",
	        "var_name": "Energy Flow Rate",
	        "format": "REAL4",
	        "note": "Unit: GJ/h"
	      }, {
	        "id": 3,
	        "register": "0005-0006",
	        "numbers": "2",
	        "var_name": "Velocity",
	        "format": "REAL4",
	        "note": "Unit: m/s"
	      }, {
	        "id": 4,
	        "register": "0005-0006",
	        "numbers": "2",
	        "var_name": "Velocity",
	        "format": "REAL4",
	        "note": "Unit: m/s"
	      }, {
	        "id": 5,
	        "register": "0005-0006",
	        "numbers": "2",
	        "var_name": "Velocity",
	        "format": "REAL4",
	        "note": "Unit: m/s"
	      }, {
	        "id": 6,
	        "register": "0005-0006",
	        "numbers": "2",
	        "var_name": "Velocity",
	        "format": "REAL4",
	        "note": "Unit: m/s"
	      }
      ],
    }
  },
}
</script>