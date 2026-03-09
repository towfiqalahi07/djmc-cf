export const divisionToDistricts: Record<string, string[]> = {
  'Dhaka': ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur', 'Tangail'],
  'Chattogram': ['Bandarban', 'Brahmanbaria', 'Chandpur', 'Chattogram', 'Comilla', "Cox's Bazar", 'Feni', 'Khagrachhari', 'Lakshmipur', 'Noakhali', 'Rangamati'],
  'Rajshahi': ['Bogra', 'Chapainawabganj', 'Joypurhat', 'Naogaon', 'Natore', 'Pabna', 'Rajshahi', 'Sirajganj'],
  'Khulna': ['Bagerhat', 'Chuadanga', 'Jashore', 'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira'],
  'Barisal': ['Barguna', 'Barisal', 'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur'],
  'Sylhet': ['Habiganj', 'Moulvibazar', 'Sunamganj', 'Sylhet'],
  'Rangpur': ['Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Rangpur', 'Thakurgaon'],
  'Mymensingh': ['Jamalpur', 'Mymensingh', 'Netrokona', 'Sherpur']
};

export const getDivision = (district: string): string => {
  for (const [division, districts] of Object.entries(divisionToDistricts)) {
    if (districts.includes(district)) return division;
  }
  return 'Unknown';
};

export const allDistricts = Object.values(divisionToDistricts).flat().sort();
