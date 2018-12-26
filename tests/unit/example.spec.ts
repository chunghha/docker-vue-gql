import { shallowMount } from '@vue/test-utils';
import UserList from '@/components/UserList.vue';

describe('UserList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(UserList, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
